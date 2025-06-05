
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Build a strong social presence and engage with your audience across all major platforms.",
      icon: "📱",
      features: [
        "Strategy Development",
        "Content Creation & Scheduling",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting"
      ],
      startingPrice: "$299"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to maximize your online reach and conversions.",
      icon: "🎯",
      features: [
        "SEO Optimization",
        "PPC Advertising",
        "Email Marketing",
        "Conversion Optimization",
        "Performance Tracking"
      ],
      startingPrice: "$499"
    },
    {
      title: "Content Creation",
      description: "Compelling content that tells your story and drives meaningful engagement with your audience.",
      icon: "✍️",
      features: [
        "Blog Writing",
        "Video Production",
        "Copywriting",
        "Brand Storytelling",
        "Content Strategy"
      ],
      startingPrice: "$199"
    },
    {
      title: "Web Design / Landing Pages",
      description: "Beautiful, responsive websites and high-converting landing pages that represent your brand.",
      icon: "💻",
      features: [
        "Custom Web Design",
        "Responsive Development",
        "Landing Page Optimization",
        "User Experience Design",
        "Performance Optimization"
      ],
      startingPrice: "$799"
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visual designs that make your brand stand out and leave a lasting impression.",
      icon: "🎨",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design"
      ],
      startingPrice: "$149"
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud solutions to modernize your infrastructure and improve efficiency.",
      icon: "☁️",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Security Implementation",
        "Performance Monitoring",
        "Cost Optimization"
      ],
      startingPrice: "$999"
    },
    {
      title: "App Development",
      description: "Custom mobile and web applications tailored to your specific business requirements.",
      icon: "📱",
      features: [
        "iOS & Android Apps",
        "Web Applications",
        "API Development",
        "Database Design",
        "Testing & Deployment"
      ],
      startingPrice: "$2,999"
    },
    {
      title: "AI Agent Services",
      description: "Cutting-edge AI solutions to automate processes and enhance business intelligence.",
      icon: "🤖",
      features: [
        "Chatbot Development",
        "Process Automation",
        "Data Analysis",
        "Machine Learning Models",
        "AI Integration"
      ],
      startingPrice: "$1,499"
    }
  ];

  const benefits = [
    "Expert team with proven experience",
    "Customized solutions for your business",
    "Transparent pricing with no hidden fees",
    "Regular progress updates and reporting",
    "Ongoing support and maintenance",
    "Money-back satisfaction guarantee"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital solutions to grow your business and strengthen your brand presence
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              From web design to AI services, we offer everything you need to succeed in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-2xl font-bold text-[#004282]">{service.startingPrice}</span>
                    </div>
                    <Button asChild className="w-full bg-[#004282] hover:bg-[#003366] text-white">
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
      <section className="py-20 bg-[#f2f8ff]">
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
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements" },
              { step: "02", title: "Strategy", description: "We develop a customized plan tailored to your needs" },
              { step: "03", title: "Execution", description: "Our expert team brings your project to life" },
              { step: "04", title: "Delivery", description: "We deliver exceptional results and provide ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#004282] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#004282] text-lg px-8 py-3">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
