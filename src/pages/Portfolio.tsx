
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: 21 },
    { id: "web", name: "Web Design", count: 7 },
    { id: "digital-marketing", name: "Digital Marketing", count: 7 },
    { id: "ai-agent", name: "AI Agent Services", count: 7 },
    { id: "mobile", name: "Mobile App Development", count: 7 },
    { id: "branding", name: "Branding", count: 7 },
    { id: "graphic", name: "Graphic Design", count: 7 },
    { id: "cloud", name: "Cloud Computing", count: 7 }
  ];

  const projects = [
    // Web Design Services
    {
      id: 1,
      title: "Custom Website Design",
      category: "web",
      description: "Modern responsive website with custom design elements and optimized user experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Custom Design", "Responsive", "UX/UI", "Modern"],
      results: "250% increase in user engagement",
      client: "TechStart Inc.",
      link: "#"
    },
    {
      id: 2,
      title: "Landing Page Optimization",
      category: "web",
      description: "High-converting landing pages with A/B testing and conversion rate optimization",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      tags: ["Landing Page", "CRO", "A/B Testing", "Optimization"],
      results: "180% conversion rate improvement",
      client: "ConvertPro",
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "web",
      description: "Full-featured e-commerce website with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Payment Gateway", "Inventory", "Shopping Cart"],
      results: "300% increase in online sales",
      client: "ShopEasy",
      link: "#"
    },
    {
      id: 4,
      title: "CMS Integration",
      category: "web",
      description: "WordPress and Webflow integration with custom content management solutions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["WordPress", "Webflow", "CMS", "Content Management"],
      results: "90% reduction in content update time",
      client: "ContentCorp",
      link: "#"
    },
    {
      id: 5,
      title: "UI/UX Design System",
      category: "web",
      description: "Comprehensive design system with reusable components and style guidelines",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Design System", "UI/UX", "Components", "Guidelines"],
      results: "60% faster development cycles",
      client: "DesignLab",
      link: "#"
    },
    {
      id: 6,
      title: "Responsive Development",
      category: "web",
      description: "Mobile-first responsive web development ensuring perfect display across all devices",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Responsive", "Mobile-First", "Cross-Platform", "Optimization"],
      results: "40% increase in mobile traffic",
      client: "MobileTech",
      link: "#"
    },
    {
      id: 7,
      title: "Website Maintenance",
      category: "web",
      description: "Ongoing website maintenance and support services with 24/7 monitoring",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Maintenance", "Support", "Monitoring", "Updates"],
      results: "99.9% uptime achieved",
      client: "ReliableWeb",
      link: "#"
    },

    // Digital Marketing Services
    {
      id: 8,
      title: "Social Media Marketing",
      category: "digital-marketing",
      description: "Comprehensive social media strategy across multiple platforms with content creation",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      tags: ["Social Media", "Content Creation", "Strategy", "Engagement"],
      results: "400% increase in social engagement",
      client: "SocialBrand",
      link: "#"
    },
    {
      id: 9,
      title: "SEO Optimization",
      category: "digital-marketing",
      description: "Search engine optimization strategy resulting in top rankings for target keywords",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
      tags: ["SEO", "Keywords", "Rankings", "Organic Traffic"],
      results: "500% increase in organic traffic",
      client: "SearchPro",
      link: "#"
    },
    {
      id: 10,
      title: "PPC Campaign Management",
      category: "digital-marketing",
      description: "Pay-per-click advertising campaigns with optimized targeting and budget management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["PPC", "Google Ads", "Targeting", "ROI"],
      results: "250% ROI on ad spend",
      client: "AdMax",
      link: "#"
    },
    {
      id: 11,
      title: "Email Marketing",
      category: "digital-marketing",
      description: "Automated email marketing campaigns with personalization and segmentation",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      tags: ["Email Marketing", "Automation", "Personalization", "Segmentation"],
      results: "65% open rate, 18% CTR",
      client: "EmailPro",
      link: "#"
    },
    {
      id: 12,
      title: "Conversion Rate Optimization",
      category: "digital-marketing",
      description: "CRO strategy implementation with testing and optimization for maximum conversions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["CRO", "Testing", "Optimization", "Conversions"],
      results: "180% conversion rate improvement",
      client: "ConvertMax",
      link: "#"
    },
    {
      id: 13,
      title: "Influencer Marketing",
      category: "digital-marketing",
      description: "Strategic influencer partnerships and campaign management for brand awareness",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Influencer", "Partnerships", "Brand Awareness", "Campaigns"],
      results: "300% increase in brand mentions",
      client: "InfluenceBrand",
      link: "#"
    },
    {
      id: 14,
      title: "Content Marketing Strategy",
      category: "digital-marketing",
      description: "Comprehensive content marketing strategy with blog posts, videos, and copywriting",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      tags: ["Content Marketing", "Blog", "Video", "Copywriting"],
      results: "450% increase in content engagement",
      client: "ContentKing",
      link: "#"
    },

    // AI Agent Services
    {
      id: 15,
      title: "AI Chatbot Development",
      category: "ai-agent",
      description: "Custom AI chatbot with natural language processing and automated customer support",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["AI Chatbot", "NLP", "Customer Support", "Automation"],
      results: "70% reduction in support tickets",
      client: "ChatBot Inc.",
      link: "#"
    },
    {
      id: 16,
      title: "Virtual Customer Support",
      category: "ai-agent",
      description: "24/7 virtual customer support agent with AI-powered response generation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["Virtual Support", "24/7", "AI Responses", "Customer Service"],
      results: "90% customer satisfaction rate",
      client: "SupportAI",
      link: "#"
    },
    {
      id: 17,
      title: "AI Sales Assistant",
      category: "ai-agent",
      description: "Intelligent sales assistant for lead qualification and automated follow-ups",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      tags: ["Sales AI", "Lead Qualification", "Follow-ups", "CRM Integration"],
      results: "300% increase in qualified leads",
      client: "SalesForce Pro",
      link: "#"
    },
    {
      id: 18,
      title: "Voice Assistant Integration",
      category: "ai-agent",
      description: "Custom voice assistant integration with Alexa and Google Assistant platforms",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      tags: ["Voice Assistant", "Alexa", "Google", "Voice Commands"],
      results: "250% increase in user interactions",
      client: "VoiceTech",
      link: "#"
    },
    {
      id: 19,
      title: "AI Lead Qualification",
      category: "ai-agent",
      description: "Automated lead scoring and qualification system with machine learning algorithms",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
      tags: ["Lead Scoring", "Machine Learning", "Qualification", "Automation"],
      results: "85% accuracy in lead scoring",
      client: "LeadGen AI",
      link: "#"
    },
    {
      id: 20,
      title: "Sentiment Analysis Bot",
      category: "ai-agent",
      description: "Real-time sentiment analysis for social media monitoring and brand reputation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Sentiment Analysis", "Social Monitoring", "Brand Reputation", "Real-time"],
      results: "95% accuracy in sentiment detection",
      client: "BrandWatch",
      link: "#"
    },
    {
      id: 21,
      title: "Intelligent FAQ System",
      category: "ai-agent",
      description: "AI-powered FAQ system with dynamic content generation and smart search",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["FAQ System", "Dynamic Content", "Smart Search", "AI Powered"],
      results: "60% reduction in support queries",
      client: "HelpDesk Pro",
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Showcasing our best work and successful client partnerships
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
              Explore our diverse range of projects spanning web design, mobile apps, branding, and digital marketing
            </p>
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id
                    ? "bg-[#004282] text-white hover:bg-[#003366]"
                    : "border-[#004282] text-[#004282] hover:bg-[#004282] hover:text-white"
                } px-6 py-2`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#004282] hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#004282] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    Client: {project.client}
                  </p>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center text-green-700">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold">Result: {project.results}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#f2f8ff] text-[#004282] text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results that demonstrate the measurable impact of our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-8 w-8" />, metric: "500+", label: "Projects Completed", description: "Successfully delivered" },
              { icon: <Star className="h-8 w-8" />, metric: "98%", label: "Client Satisfaction", description: "Happy clients rate" },
              { icon: <TrendingUp className="h-8 w-8" />, metric: "300%", label: "Average ROI", description: "Return on investment" },
              { icon: <Users className="h-8 w-8" />, metric: "24hrs", label: "Average Response", description: "Support response time" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="text-[#004282] mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#004282] mb-3">
                    {stat.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8 leading-relaxed">
              "Teleiocraft Solutions didn't just deliver a website - they delivered a complete digital transformation. Their attention to detail and commitment to our success was exceptional. We've seen incredible growth since partnering with them."
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
                alt="Client"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">Sarah Johnson</div>
                <div className="text-gray-600">CEO, TechStart Inc.</div>
                <div className="text-sm text-[#004282] font-medium">300% increase in conversions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004282] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our portfolio of successful clients. Let's create something amazing together and achieve outstanding results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Project Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-[#004282] text-lg px-8 py-3">
              <Link to="/services">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
