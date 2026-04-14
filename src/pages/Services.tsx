
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Star, Award, Clock, Users,
  Layers, Code2, Bot, Cloud, Palette, BarChart3
} from "lucide-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "SaaS Product Development",
      description: "We design and build scalable, multi-tenant SaaS platforms from the ground up — handling everything from architecture to launch and beyond.",
      icon: <Layers className="h-8 w-8" />,
      category: "Core Tech",
      categoryColor: "bg-blue-100 text-blue-700",
      features: [
        "Multi-tenant Architecture",
        "Subscription & Billing Systems",
        "Admin & User Dashboards",
        "Authentication & Permissions",
        "Scalable Backend Infrastructure",
        "Post-Launch Support & Iteration"
      ],
      popular: true,
      accentColor: "from-[#004282] to-[#0068cc]"
    },
    {
      title: "Software & App Development",
      description: "Custom web and mobile applications built for performance, scalability, and real-world impact — tailored precisely to your business needs.",
      icon: <Code2 className="h-8 w-8" />,
      category: "Core Tech",
      categoryColor: "bg-blue-100 text-blue-700",
      features: [
        "iOS & Android Development",
        "Web Application Development",
        "REST & GraphQL API Design",
        "Database Architecture",
        "Third-party Integrations",
        "Testing & Deployment Pipelines"
      ],
      popular: false,
      accentColor: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "AI & Automation",
      description: "Intelligent systems that automate your workflows, surface actionable insights, and create smarter experiences for your customers.",
      icon: <Bot className="h-8 w-8" />,
      category: "Core Tech",
      categoryColor: "bg-blue-100 text-blue-700",
      features: [
        "AI Agent Development",
        "Chatbot & Conversational AI",
        "Machine Learning Models",
        "Workflow Automation",
        "Data Analysis & Intelligence",
        "AI Integration into Existing Products"
      ],
      popular: false,
      accentColor: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions that keep your products fast, secure, and always available — so you can focus on building, not maintaining.",
      icon: <Cloud className="h-8 w-8" />,
      category: "Core Tech",
      categoryColor: "bg-blue-100 text-blue-700",
      features: [
        "Cloud Migration (AWS, GCP, Azure)",
        "DevOps & CI/CD Pipelines",
        "Infrastructure as Code",
        "Security & Compliance Setup",
        "Performance Monitoring",
        "Cost Optimization"
      ],
      popular: false,
      accentColor: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "Brand Identity & Strategy",
      description: "We help companies define who they are and make it visible — from logo and visual identity to brand voice and full market positioning.",
      icon: <Palette className="h-8 w-8" />,
      category: "Brand",
      categoryColor: "bg-purple-100 text-purple-700",
      features: [
        "Logo & Visual Identity Design",
        "Brand Guidelines & Systems",
        "Brand Voice & Messaging",
        "Market Positioning Strategy",
        "Marketing Collateral Design",
        "Rebranding & Brand Refresh"
      ],
      popular: false,
      accentColor: "from-[#5b21b6] to-[#7c3aed]"
    },
    {
      title: "UX/UI Design & Digital Growth",
      description: "Beautiful, user-centred designs combined with data-driven digital strategies to attract, convert, and retain your ideal customers.",
      icon: <BarChart3 className="h-8 w-8" />,
      category: "Growth",
      categoryColor: "bg-emerald-100 text-emerald-700",
      features: [
        "User Research & Wireframing",
        "UI Design & Prototyping",
        "Design Systems",
        "SEO & PPC Advertising",
        "Social Media & Content Strategy",
        "Analytics & Conversion Optimisation"
      ],
      popular: false,
      accentColor: "from-[#065f46] to-[#059669]"
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
      <section className="relative bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              End-to-End Tech Services
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We build your product, make it beautiful, and grow it — all under one roof.
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
              From SaaS platforms and AI tools to brand identity and digital growth — TeleioCraft is your full-service technology partner.
            </p>
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3 shadow-xl">
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
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Six focused disciplines. One mission — helping you build, brand, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-white rounded-2xl flex flex-col h-full
                  ${service.popular ? 'ring-2 ring-[#004282]' : ''}`}
              >
                {service.popular && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[#004282] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.accentColor}`} />

                <CardHeader className={`pb-4 ${service.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.accentColor} text-white shadow-md`}>
                      {service.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.categoryColor}`}>
                      {service.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-snug">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow pt-0 px-6 pb-6">
                  <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${service.accentColor} hover:opacity-90 text-white rounded-xl py-3 font-medium text-sm shadow-md transition-all duration-200`}
                    >
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With TeleioCraft?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results that drive real business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-[#f2f8ff] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
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
              A streamlined approach that ensures successful delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements through detailed consultation" },
              { step: "02", title: "Strategy", description: "We develop a customised plan tailored to your specific needs and objectives" },
              { step: "03", title: "Execution", description: "Our expert team brings your project to life with precision and attention to detail" },
              { step: "04", title: "Delivery", description: "We deliver exceptional results and provide ongoing support for continued success" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#004282] to-[#0068cc] text-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#004282] to-[#003366] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's talk about your project. We'll help you figure out the right services and build a plan that fits your goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3 shadow-xl">
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
