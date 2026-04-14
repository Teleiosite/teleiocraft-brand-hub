import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

// Define a type for the expected error structure from Formspree
interface FormspreeError {
  message?: string; // General error message
  field?: string;   // Field name for specific errors
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const { toast } = useToast();

  // State and ref for reCAPTCHA
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // State for local validation errors
  const [localErrors, setLocalErrors] = useState<{[key: string]: string}>({});

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Client-side validation function
  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    if (!nameInput?.value.trim()) {
      errors.name = 'Name is required';
    } else if (nameInput.value.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!emailInput?.value.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!subjectInput?.value.trim()) {
      errors.subject = 'Subject is required';
    } else if (subjectInput.value.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    }

    if (!messageInput?.value.trim()) {
      errors.message = 'Message is required';
    } else if (messageInput.value.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setLocalErrors(errors); // Update local errors state
    return Object.keys(errors).length === 0;
  };

  // Handle Form Submission with Google Apps Script (GET with query params)
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const params = new URLSearchParams();
      params.append("name", formData.get("name")?.toString() || "");
      params.append("email", formData.get("email")?.toString() || "");
      params.append("subject", formData.get("subject")?.toString() || "");
      params.append("message", formData.get("message")?.toString() || "");

      const GAS_URL = "https://script.google.com/macros/s/AKfycbwQ6YM_OIP4odiVIgYU4vqLOo4ijc3EwuFWuYtotHO6ekBeHd4TEmJIVQ7SAcM0Tf4G/exec";

      // Use GET request with params in the URL — avoids the POST/redirect/no-cors body-drop issue
      await fetch(`${GAS_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      setSucceeded(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change to trigger validation check for button state
  const handleInputChange = () => {
      // This function exists primarily to trigger a re-render
      // which allows the isFormValid check to update.
      // We don't need to manage formData state with useForm.
  };


  // Handle CAPTCHA change
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  // Check if form is valid for button enablement
  const isFormValid = () => {
      // We now check local errors AND if required fields have any content AND captcha
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
      const subjectInput = document.getElementById('subject') as HTMLInputElement;
      const messageInput = document.getElementById('message') as HTMLTextAreaElement;

      const isFieldsFilled = nameInput?.value.trim() !== '' &&
                             emailInput?.value.trim() !== '' &&
                             subjectInput?.value.trim() !== '' &&
                             messageInput?.value.trim() !== '';

      return isFieldsFilled && Object.keys(localErrors).length === 0 && captchaValue !== null && !isSubmitting;
  }


  // Handle success state
  useEffect(() => {
    if (succeeded) {
      // Show a success toast message
      toast({
         title: "Message Sent Successfully!",
         description: "Thank you for your message. We'll get back to you shortly.",
      });

      // Reset the form and captcha on success
      const form = document.getElementById('contact-form-element') as HTMLFormElement;
      if (form) {
          form.reset();
      }
      setCaptchaValue(null);
      recaptchaRef.current?.reset();

      // You can still redirect if you prefer, but showing an on-page
      // success message with the hook is often preferred.
      // window.location.href = '/thank-you';
      setSucceeded(false);
    }
  }, [succeeded, toast]);




  // Trigger validation check whenever input fields change
  useEffect(() => {
      // Add event listeners to trigger validation on input change
      const formElement = document.getElementById('contact-form-element');
      if (formElement) {
          const inputs = formElement.querySelectorAll('input, textarea');
          inputs.forEach(input => {
              input.addEventListener('input', validateForm); // Re-validate on input
          });
      }

      // Clean up event listeners on component unmount
      return () => {
         if (formElement) {
             const inputs = formElement.querySelectorAll('input, textarea');
             inputs.forEach(input => {
                 input.removeEventListener('input', validateForm);
             });
         }
      };
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#004282] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#004282]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Added id for form reset and onSubmit from Formspree */}
                <form
                  id="contact-form-element" // Added ID for form reset
                  onSubmit={handleSubmission}
                  className="space-y-6"
                  onChange={handleInputChange} // Use onChange to trigger validation check
                >
                   {/* Hidden field for reCAPTCHA value */}
                   <input type="hidden" name="g-recaptcha-response" value={captchaValue || ""} />


                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={`mt-1 ${localErrors.name ? 'border-red-500' : ''}`} // Add error class
                      aria-describedby={localErrors.name ? 'name-error' : undefined}
                    />
                    {localErrors.name && ( // Display local validation error
                      <p id="name-error" className="text-red-500 text-sm mt-1">{localErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`mt-1 ${localErrors.email ? 'border-red-500' : ''}`} // Add error class
                      aria-describedby={localErrors.email ? 'email-error' : undefined}
                    />
                     {localErrors.email && ( // Display local validation error
                      <p id="email-error" className="text-red-500 text-sm mt-1">{localErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className={`mt-1 ${localErrors.subject ? 'border-red-500' : ''}`} // Add error class
                      placeholder="What can we help you with?"
                       aria-describedby={localErrors.subject ? 'subject-error' : undefined}
                    />
                    {localErrors.subject && ( // Display local validation error
                      <p id="subject-error" className="text-red-500 text-sm mt-1">{localErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className={`mt-1 ${localErrors.message ? 'border-red-500' : ''}`} // Add error class
                      placeholder="Tell us about your project in detail..."
                       aria-describedby={localErrors.message ? 'message-error' : undefined}
                    />
                     {localErrors.message && ( // Display local validation error
                      <p id="message-error" className="text-red-500 text-sm mt-1">{localErrors.message}</p>
                    )}
                  </div>

                  {/* ReCAPTCHA component */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // IMPORTANT: Replace with your actual site key
                      onChange={handleCaptchaChange}
                    />
                  </div>


                  <Button
                    type="submit"
                    className="w-full bg-[#004282] hover:bg-[#003366] text-white"
                    disabled={!isFormValid()} // Disable based on form validity, captcha, and submission state
                  >
                    {isSubmitting ? (
                      <>
                        <Send className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>


                  <div className="text-sm text-gray-600 text-center space-y-2">
                    <p>* Required fields</p>
                    <p>After submitting, your message will be sent and you will see a confirmation.</p>
                    <p>For urgent matters, call us at +44 7534 468836 (UK) or +234 813 759 2915 (Nigeria)</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">United Kingdom</h4>
                      <div className="flex items-center mb-1">
                        <Phone className="h-4 w-4 text-[#004282] mr-2" />
                        <span className="text-gray-600">07534 468836</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-[#004282] mr-2 mt-1" />
                        <span className="text-gray-600 text-sm">
                          13 Warwick close, Hornchurch, RM11 3DQ
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Nigeria</h4>
                      <div className="flex items-center mb-1">
                        <Phone className="h-4 w-4 text-[#004282] mr-2" />
                        <span className="text-gray-600">08137592915</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-[#004282] mr-2 mt-1" />
                        <span className="text-gray-600 text-sm">
                          MSQ Gate, Babcock University, Ilishan Ogun State
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center pt-2">
                      <Mail className="h-6 w-6 text-[#004282] mr-3" />
                      <span className="text-gray-600">TeleiocraftSolutions@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-[#004282] mr-3" />
                      <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free consultation to understand your needs</li>
                  <li>• Expert team with years of experience</li>
                  <li>• Competitive pricing starting at your budget</li>
                  <li>• 24/7 support and maintenance</li>
                  <li>• 100% satisfaction guarantee</li>
                </ul>
              </div>

              <div className="bg-[#f2f8ff] p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#004282] mb-3">Get Started Today!</h4>
                <p className="text-gray-600 mb-4">
                  Ready to transform your business? Book a free consultation with our experts.
                </p>
                <Button asChild className="bg-[#004282] hover:bg-[#003366] text-white">
                  <a href="mailto:TeleiocraftSolutions@gmail.com">Book Free Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              We operate globally with offices in the United Kingdom and Nigeria
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635194.2098742194!2d-0.8406461975097656!3d51.528771840765326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }} // Corrected style prop
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location in Greater London, United Kingdom"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
