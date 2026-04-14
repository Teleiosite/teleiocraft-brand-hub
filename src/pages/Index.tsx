import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { ArrowDown, Star, Users, Trophy, Clock, CheckCircle, ArrowRight, Layers, Code2, Bot, Cloud, Palette, BarChart3 } from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      title: "Teleiocraft Solutions",
      subtitle: "We Build, Brand & Grow Your Business",
      description: "From SaaS platforms to AI tools, we're your full-service technology partner"
    },
    {
      image: "/lovable-uploads/SaaS Dashbord 2.jpg",
      title: "SaaS & App Development",
      subtitle: "Scalable products built for the real world",
      description: "We design and build multi-tenant SaaS platforms, web apps, and mobile apps from the ground up"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      title: "AI & Automation",
      subtitle: "Intelligent systems for modern businesses",
      description: "Leverage cutting-edge AI agents, chatbots, and automation to streamline your operations"
    }
  ];

  const services = [
    {
      title: "SaaS Product Development",
      description: "We build scalable, multi-tenant SaaS platforms from architecture to launch, including billing, dashboards, and auth.",
      icon: <Layers className="h-8 w-8" />,
      accent: "from-[#004282] to-[#0068cc]"
    },
    {
      title: "Software & App Development",
      description: "Custom web and mobile applications built for performance, scalability, and real-world business impact.",
      icon: <Code2 className="h-8 w-8" />,
      accent: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "AI & Automation",
      description: "AI agents, chatbots, and workflow automation that make your business smarter and more efficient.",
      icon: <Bot className="h-8 w-8" />,
      accent: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions on AWS, GCP, OCI, or Azure, keeping your products fast, secure, and always available.",
      icon: <Cloud className="h-8 w-8" />,
      accent: "from-[#1a3a5c] to-[#004282]"
    },
    {
      title: "Brand Identity & Strategy",
      description: "We help companies define who they are, from logo and visual identity to brand voice and market positioning.",
      icon: <Palette className="h-8 w-8" />,
      accent: "from-[#5b21b6] to-[#7c3aed]"
    },
    {
      title: "UX/UI Design & Digital Growth",
      description: "User-centred design combined with SEO, PPC, and content strategy to attract, convert, and retain customers.",
      icon: <BarChart3 className="h-8 w-8" />,
      accent: "from-[#065f46] to-[#059669]"
    }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#004282]" />,
      title: "Expert Team",
      description: "Skilled professionals with years of industry experience"
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#004282]" />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#004282]" />,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver quality work promptly"
    },
    {
      icon: <Star className="h-8 w-8 text-[#004282]" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Teleiocraft transformed our online presence completely. Our sales increased by 200% within 6 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Creative Agency",
      text: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      text: "The best investment we made for our business. Highly recommend their services!",
      rating: 5
    },
    {
      name: "David Kim",
      company: "StartupLab",
      text: "Their AI solutions revolutionized our workflow. Incredible expertise and support throughout the project.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "GrowthCorp",
      text: "Outstanding web design and digital marketing services. Our conversion rates improved by 150%!",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "InnovateTech",
      text: "Teleiocraft's cloud solutions scaled our business seamlessly. Their team is truly exceptional.",
      rating: 5
    }
  ];

  const [heroEmblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })]
  );

  const [testimonialsEmblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  const [mobileTestimonialsEmblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="overflow-hidden h-full" ref={heroEmblaRef}>
          <div className="flex h-full">
            {heroSlides.map((slide, index) => (
              <div key={index} className="relative h-screen flex-[0_0_100%]">
                {/* Background overlay with blue tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#004282]/80 to-[#0056a3]/80 z-10"></div>

                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${slide.image}')` }}></div>

                <div className="relative z-20 h-full flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {index === 0 ? "Teleiocraft Solutions" : slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-blue-100">
                      {index === 0 ? "We're your Brand Builders and Growth Partners" : slide.subtitle}
                    </p>
                    <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex justify-center">
                      <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
                        <Link to="/contact">Book FREE Consultation Today!</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ArrowDown className="h-8 w-8 animate-bounce text-white" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden group">
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.accent}`} />
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-md mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#004282] hover:bg-[#003366] text-white">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#f2f8ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          {/* Desktop Carousel */}
          <div className="relative max-w-6xl mx-auto hidden md:block">
            <div className="overflow-hidden" ref={testimonialsEmblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_33.333%] min-w-0 pl-4">
                    <Card className="border-0 shadow-md h-full mr-4 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic flex-grow text-left">
                          "{testimonial.text}"
                        </p>
                        <div className="mt-auto text-left">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={mobileTestimonialsEmblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_85%] min-w-0 pl-4">
                    <Card className="border-0 shadow-md mr-4 bg-white/90 backdrop-blur-sm animate-fade-in">
                      <CardContent className="p-6">
                        <div className="flex mb-4 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic text-center leading-relaxed text-sm">
                          "{testimonial.text}"
                        </p>
                        <div className="text-center">
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004282] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's work together to build something amazing. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#004282] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/contact#contact-form">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-[#004282] hover:bg-white hover:text-[#004282] text-lg px-8 py-3 border-2">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
