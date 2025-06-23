import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from "lucide-react";
// Removing React-Google-Recaptcha to rely on FormSubmit's built-in spam protection
// import { supabase } from "@/integrations/supabase/client"; // Removing Supabase import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  // Removed isSubmitted and isSubmitting state as page will reload
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // Removing captcha state and ref
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Removed captcha handler
  // const handleCaptchaChange = (value: string | null) => {
  //   setCaptchaValue(value);
  // };

  // Simplified handleSubmit for validation only
  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault(); // Prevent form submission if validation fails
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }
    // If validation passes, allow the default form submission
 };

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
                {/* Modified form tag for standard submission */}
                <form
                  onSubmit={handleSubmit} // Still use onSubmit for client-side validation
                  className="space-y-6"
                  data-netlify="true" // Added for Netlify Forms
                >
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`mt-1 ${formErrors.name ? 'border-red-500' : ''}`}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`mt-1 ${formErrors.email ? 'border-red-500' : ''}`}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`mt-1 ${formErrors.subject ? 'border-red-500' : ''}`}
                      placeholder="What can we help you with?"
                      aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                    />
                    {formErrors.subject && (
                      <p id="subject-error" className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`mt-1 ${formErrors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project in detail..."
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    />
                    {formErrors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* FormSubmit handles reCAPTCHA by default in standard forms */}
                  {/* Removing ReCAPTCHA component */}
                  {/* <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test site key - replace with your actual site key
                      onChange={handleCaptchaChange}
                    />
                  </div> */}

                  <Button
                    type="submit"
                    className="w-full bg-[#004282] hover:bg-[#003366] text-white"
                    // No need to disable while submitting as page reloads
                    // disabled={isSubmitting}
                  >
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  </Button>

                  <div className="text-sm text-gray-600 text-center space-y-2">
                    <p>* Required fields</p>
                    <p>After submitting, your message will be sent and you will see a confirmation.</p>
                    <p>For urgent matters, call us directly at +1 (555) 123-4567</p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-[#004282] mr-3" />
                    <span className="text-gray-600">TeleiocraftSolutions@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-[#004282] mr-3" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-[#004282] mr-3" />
                    <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#004282] mr-3" />
                    <span className="text-gray-600">Greater London, United Kingdom</span>
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
              We're located in Greater London, United Kingdom
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635194.2098742194!2d-0.8406461975097656!3d51.528771840765326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
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
