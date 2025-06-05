
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "branding", name: "Branding" },
    { id: "marketing", name: "Marketing" }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Landing Page",
      category: "web",
      description: "Modern SaaS landing page with conversion optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "Landing Page"],
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "mobile",
      description: "iOS and Android app for online retail platform",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["React Native", "E-commerce", "Mobile"],
      link: "#"
    },
    {
      id: 3,
      title: "Creative Agency Rebrand",
      category: "branding",
      description: "Complete brand identity redesign for marketing agency",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Identity", "Print"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "web",
      description: "Responsive website with online ordering system",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["WordPress", "Online Ordering", "Restaurant"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "marketing",
      description: "Multi-platform campaign increasing engagement by 300%",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["Social Media", "Campaign", "Analytics"],
      link: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Health and fitness app with AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Flutter", "AI", "Health"],
      link: "#"
    },
    {
      id: 7,
      title: "Corporate Identity Package",
      category: "branding",
      description: "Professional branding for B2B consulting firm",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Corporate", "Professional", "B2B"],
      link: "#"
    },
    {
      id: 8,
      title: "Digital Marketing Dashboard",
      category: "web",
      description: "Analytics dashboard for marketing performance tracking",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Dashboard", "Analytics", "Data Viz"],
      link: "#"
    },
    {
      id: 9,
      title: "Email Marketing Campaign",
      category: "marketing",
      description: "Automated email sequences with 45% open rates",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      tags: ["Email Marketing", "Automation", "ROI"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Showcasing our best work and successful client partnerships
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Explore our diverse range of projects spanning web design, mobile apps, branding, and digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#f2f8ff]">
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
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#004282] hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#f2f8ff] text-[#004282] text-sm rounded-full"
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
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results that demonstrate the impact of our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "500+", label: "Projects Completed", description: "Successfully delivered" },
              { metric: "98%", label: "Client Satisfaction", description: "Happy clients rate" },
              { metric: "300%", label: "Average ROI", description: "Return on investment" },
              { metric: "24hrs", label: "Average Response", description: "Support response time" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-[#004282] mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
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

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8">
            "Teleiocraft Solutions delivered exactly what we needed and more. Their attention to detail and commitment to our success was exceptional."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
              alt="Client"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">CEO, TechStart Inc.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004282] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#004282] text-lg px-8 py-3">
              <Link to="/services">
                View Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
