
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { name, email, subject, message }: ContactFormData = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get client info for logging
    const userAgent = req.headers.get("user-agent") || "";
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ipAddress = forwarded?.split(",")[0] || realIp || "unknown";

    // Log the submission to database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        ip_address: ipAddress,
        user_agent: userAgent,
        status: "pending"
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to process submission" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Contact form submission logged:", submission.id);

    // Send email to your inbox
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <hr>
      <p style="color: #666; font-size: 12px;">
        <strong>Submission Details:</strong><br>
        ID: ${submission.id}<br>
        IP Address: ${ipAddress}<br>
        User Agent: ${userAgent}<br>
        Timestamp: ${new Date().toISOString()}
      </p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain here
      to: ["TeleiocraftSolutions@gmail.com"], // Your email address
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: emailContent,
    });

    if (emailResponse.error) {
      console.error("Email sending failed:", emailResponse.error);
      
      // Update submission status to failed
      await supabase
        .from("contact_submissions")
        .update({ status: "failed" })
        .eq("id", submission.id);

      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Update submission status to sent
    await supabase
      .from("contact_submissions")
      .update({ status: "sent" })
      .eq("id", submission.id);

    console.log("Email sent successfully:", emailResponse.data?.id);

    // Send confirmation email to the user
    const confirmationEmail = `
      <h2>Thank you for contacting us!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p><strong>Your message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        <strong>Subject:</strong> ${subject}<br><br>
        ${message.replace(/\n/g, '<br>')}
      </div>
      <p>Best regards,<br>Teleiocraft Solutions Team</p>
    `;

    await resend.emails.send({
      from: "Teleiocraft Solutions <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message!",
      html: confirmationEmail,
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully!",
        id: submission.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
