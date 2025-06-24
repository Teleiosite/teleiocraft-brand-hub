import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  // Use Formspree's useForm hook
  const [state, handleSubmit] = useForm("xnnvgyqq");
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state.succeeded) {
    // Redirect to the thank you page
    window.location.href = '/thank-you'; // Redirect to the thank you page path
  }

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
                  onSubmit={handleSubmit} // Use Formspree's handleSubmit
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1"
                    />
                    <ValidationError
                      field="name"
                      errors={state.errors}/>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                    />
                    <ValidationError
                      field="email"
                      errors={state.errors}/>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="What can we help you with?"
                    />
                    <ValidationError
                      field="subject"
                      errors={state.errors}/>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="mt-1"
                      placeholder="Tell us about your project in detail..."
                    />
                     <ValidationError
                      field="message"
                      errors={state.errors}/>
                  </div>


                  <Button
                    type="submit"
                    className="w-full bg-[#004282] hover:bg-[#003366] text-white"
                    // No need to disable while submitting as page reloads
                     disabled={state.submitting}
                  >
                      <Send className="mr-2 h-4 w-4" />
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
