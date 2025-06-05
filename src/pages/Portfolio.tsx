
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", count: 9 },
    { id: "web", name: "Web Design", count: 3 },
    { id: "mobile", name: "Mobile Apps", count: 2 },
    { id: "branding", name: "Branding", count: 2 },
    { id: "marketing", name: "Digital Marketing", count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart SaaS Platform",
      category: "web",
      description: "Modern SaaS landing page with conversion optimization that increased signups by 300%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "Landing Page", "SaaS"],
      results: "300% increase in signups",
      client: "TechStart Inc.",
      link: "#"
    },
    {
      id: 2,
      title: "ShopEasy Mobile Commerce",
      category: "mobile",
      description: "iOS and Android app for online retail platform with seamless shopping experience",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["React Native", "E-commerce", "Mobile", "UI/UX"],
      results: "250% increase in mobile sales",
      client: "RetailCorp",
      link: "#"
    },
    {
      id: 3,
      title: "Innovate Agency Rebrand",
      category: "branding",
      description: "Complete brand identity redesign for marketing agency including logo, website, and materials",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Identity", "Print", "Web Design"],
      results: "40% increase in client inquiries",
      client: "Innovate Agency",
      link: "#"
    },
    {
      id: 4,
      title: "Bella Vista Restaurant",
      category: "web",
      description: "Responsive restaurant website with online ordering system and reservation management",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["WordPress", "Online Ordering", "Restaurant", "Reservations"],
      results: "150% increase in online orders",
      client: "Bella Vista",
      link: "#"
    },
    {
      id: 5,
      title: "GrowthTech Campaign",
      category: "marketing",
      description: "Multi-platform digital marketing campaign that drove exceptional engagement and conversions",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Social Media", "PPC", "Analytics", "Lead Generation"],
      results: "400% increase in qualified leads",
      client: "GrowthTech",
      link: "#"
    },
    {
      id: 6,
      title: "FitTracker Pro App",
      category: "mobile",
      description: "Health and fitness app with AI-powered recommendations and social features",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Flutter", "AI", "Health", "Social Features"],
      results: "100K+ downloads in first month",
      client: "HealthTech Solutions",
      link: "#"
    },
    {
      id: 7,
      title: "ProfessionalCorp Identity",
      category: "branding",
      description: "Corporate identity package for B2B consulting firm with professional design language",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Corporate", "Professional", "B2B", "Consulting"],
      results: "25% increase in enterprise clients",
      client: "ProfessionalCorp",
      link: "#"
    },
    {
      id: 8,
      title: "Analytics Pro Dashboard",
      category: "web",
      description: "Advanced analytics dashboard for marketing performance tracking with real-time insights",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Dashboard", "Analytics", "Data Viz", "Real-time"],
      results: "50% faster decision making",
      client: "DataDriven Inc.",
      link: "#"
    },
    {
      id: 9,
      title: "EmailMaster Automation",
      category: "marketing",
      description: "Automated email marketing campaigns with personalization and advanced segmentation",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      tags: ["Email Marketing", "Automation", "Personalization", "ROI"],
      results: "65% open rate, 18% CTR",
      client: "MarketingPro",
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
