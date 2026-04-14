import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Target, Heart, Lightbulb, Globe, Eye } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#004282]" />,
      title: "Innovation",
      description: "We stay ahead of trends and embrace cutting-edge technologies to deliver the best solutions."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#004282]" />,
      title: "Client-Centric",
      description: "Your success is our priority. We listen, understand, and deliver exactly what you need."
    },
    {
      icon: <Award className="h-8 w-8 text-[#004282]" />,
      title: "Quality",
      description: "We never compromise on quality and ensure every project meets the highest standards."
    },
    {
      icon: <Globe className="h-8 w-8 text-[#004282]" />,
      title: "Global Reach",
      description: "We work with clients worldwide, bringing diverse perspectives and global best practices."
    }
  ];

  const team = [
    {
      name: "Simeon Julius",
      role: "CEO & Founder | Cloud Engineer (AWS, Azure, Oracle)",
      image: "/lovable-uploads/Simeion Julius.jpeg",
      bio: "Visionary leader with years of experience in Cloud Consulting ",
    },
    {
      name: "Abomide Oluwaseye",
      role: "Co-Founder & Product Engineer| AI Agents & Automation| AWS Certified",
      image: "/lovable-uploads/Abomide Oluwaseye.jpeg",
      bio: "Build scalable software systems that help businesses manage operations efficiently (HireWix, an AI-powered HR and payroll platform)",
    },
    {
      name: "Oyegun Ololade",
      role: "Marketing Strategist, CTO",
      image: "/lovable-uploads/Oyegun Ololade.jpeg",
      bio: "Data-driven marketer focused on ROI and growth",
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer passionate about brand storytelling",
    },
    {
      name: "David Thompson",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "User experience expert creating intuitive digital solutions",
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      bio: "Agile methodology expert ensuring seamless project delivery",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004282] to-[#0056a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Teleiocraft Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're a passionate team of digital experts dedicated to transforming businesses through innovative solutions and strategic growth partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-[#004282] mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, enhance brand visibility, and create lasting competitive advantages in the digital marketplace.
              </p>
              <p className="text-gray-600">
                We believe every business deserves access to professional-grade digital services that were once only available to large corporations. Our mission is to democratize digital excellence.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-[#004282] mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading digital transformation partner for businesses worldwide, known for our innovation, reliability, and exceptional results that exceed client expectations.
              </p>
              <p className="text-gray-600">
                We envision a future where every business, regardless of size, can leverage the power of digital technology to achieve unprecedented growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2025 by a team of passionate digital experts, Teleiocraft Solutions began with a simple yet powerful vision: to help businesses thrive in the digital age. What started as a small web design agency has evolved into a comprehensive digital solutions provider.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to our clients' success. We've witnessed the digital landscape evolve rapidly, and we've made it our mission to stay ahead of the curve, ensuring our clients always have access to the latest and most effective digital strategies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to serve clients across the globe, helping them build stronger brands, reach wider audiences, and achieve sustainable growth through our comprehensive suite of digital services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#f2f8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#004282] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#004282] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business and achieve your digital goals.
          </p>
          <Button asChild size="lg" className="bg-[#004282] hover:bg-[#003366] text-white text-lg px-8 py-3">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
