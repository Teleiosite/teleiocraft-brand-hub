
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Award, Clock, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design / Landing Pages",
      description: "Beautiful, responsive websites and high-converting landing pages that represent your brand professionally and drive results.",
      icon: "💻",
      features: [
        "Custom Web Design",
        "Responsive Development",
        "Landing Page Optimization",
        "User Experience Design",
        "Performance Optimization",
        "SEO-Ready Structure"
      ],
      startingPrice: "$799",
      popular: true
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to maximize your online reach, engagement, and conversions across all channels.",
      icon: "🎯",
      features: [
        "SEO Optimization",
        "PPC Advertising",
        "Email Marketing",
        "Conversion Optimization",
        "Performance Tracking",
        "ROI Analytics"
      ],
      startingPrice: "$499",
      popular: false
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud solutions to modernize your infrastructure, improve efficiency, and reduce operational costs.",
      icon: "☁️",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Security Implementation",
        "Performance Monitoring",
        "Cost Optimization",
        "24/7 Support"
      ],
      startingPrice: "$999",
      popular: false
    },
    {
      title: "App Development",
      description: "Custom mobile and web applications tailored to your specific business requirements and user needs.",
      icon: "📱",
      features: [
        "iOS & Android Apps",
        "Web Applications",
        "API Development",
        "Database Design",
        "Testing & Deployment",
        "Post-Launch Support"
      ],
      startingPrice: "$2,999",
      popular: false
    },
    {
      title: "AI Agent Services",
      description: "Cutting-edge AI solutions to automate processes, enhance business intelligence, and improve customer experiences.",
      icon: "🤖",
      features: [
        "Chatbot Development",
        "Process Automation",
        "Data Analysis",
        "Machine Learning Models",
        "AI Integration",
        "Custom AI Solutions"
      ],
      startingPrice: "$1,499",
      popular: true
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visual designs that make your brand stand out and leave a lasting impression on your audience.",
      icon: "🎨",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Brand Guidelines"
      ],
      startingPrice: "$149",
      popular: false
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story, engages your audience, and drives meaningful business results.",
      icon: "✍️",
      features: [
        "Blog Writing",
        "Video Production",
        "Copywriting",
        "Brand Storytelling",
        "Content Strategy",
        "Editorial Calendar"
      ],
      startingPrice: "$199",
      popular: false
    },
    {
      title: "Social Media Marketing",
      description: "Build a strong social presence and engage with your audience across all major platforms to grow your brand.",
      icon: "📱",
      features: [
        "Strategy Development",
        "Content Creation & Scheduling",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting",
        "Influencer Partnerships"
      ],
      startingPrice: "$299",
      popular: false
    }
  ];

  const benefits = [
    { icon: <Users className="h-6 w-6" />, text: "Expert team with proven experience" },
    { icon: <Award className="h-6 w-6" />, text: "Customized solutions for your business" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Transparent pricing with no hidden fees" },
    { icon: <Clock className="h-6 w-6" />, text: "Regular progress updates and reporting" },
    { icon: <Star className="h-6 w-6" />, text: "Ongoing support and maintenance" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Money-back satisfaction guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to grow your business and strengthen your brand presence
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
              From web design to AI services, we offer everything you need to succeed in the digital world
            </p>
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Get Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Services Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each service is designed to deliver exceptional results and drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative ${service.popular ? 'ring-2 ring-[#004282]' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#004282] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-[#004282]">{service.startingPrice}</span>
                    <span className="text-gray-500 ml-2">starting at</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full pt-0">
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-center">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <Button asChild className={`w-full ${service.popular ? 'bg-[#004282] hover:bg-[#003366]' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results that drive real business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-[#f2f8ff] rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#004282] mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements through detailed consultation" },
              { step: "02", title: "Strategy", description: "We develop a customized plan tailored to your specific needs and objectives" },
              { step: "03", title: "Execution", description: "Our expert team brings your project to life with precision and attention to detail" },
              { step: "04", title: "Delivery", description: "We deliver exceptional results and provide ongoing support for continued success" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#004282] text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004282] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help your business grow and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Project Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-[#004282] text-lg px-8 py-3">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
