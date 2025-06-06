import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "All Projects", count: 49 },
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
      title: "Landing Page Design & Optimization",
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
      title: "Responsive Web Development",
      category: "web",
      description: "Mobile-first responsive web development ensuring perfect display across all devices",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Responsive", "Mobile-First", "Cross-Platform", "Optimization"],
      results: "40% increase in mobile traffic",
      client: "MobileTech",
      link: "#"
    },
    {
      id: 4,
      title: "UI/UX Design",
      category: "web",
      description: "Comprehensive design system with reusable components and style guidelines",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Design System", "UI/UX", "Components", "Guidelines"],
      results: "60% faster development cycles",
      client: "DesignLab",
      link: "#"
    },
    {
      id: 5,
      title: "E-commerce Website Design",
      category: "web",
      description: "Full-featured e-commerce website with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Payment Gateway", "Inventory", "Shopping Cart"],
      results: "300% increase in online sales",
      client: "ShopEasy",
      link: "#"
    },
    {
      id: 6,
      title: "Website Maintenance & Support",
      category: "web",
      description: "Ongoing website maintenance and support services with 24/7 monitoring",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Maintenance", "Support", "Monitoring", "Updates"],
      results: "99.9% uptime achieved",
      client: "ReliableWeb",
      link: "#"
    },
    {
      id: 7,
      title: "CMS Integration",
      category: "web",
      description: "WordPress and Webflow integration with custom content management solutions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["WordPress", "Webflow", "CMS", "Content Management"],
      results: "90% reduction in content update time",
      client: "ContentCorp",
      link: "#"
    },

    // Digital Marketing Services
    {
      id: 8,
      title: "Social Media Marketing (SMM)",
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
      title: "Search Engine Optimization (SEO)",
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
      title: "Pay-Per-Click Advertising (PPC)",
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
      title: "Conversion Rate Optimization (CRO)",
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
      title: "Content Marketing & Copywriting",
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
      title: "Virtual Customer Support Agent",
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
      title: "AI Sales Assistant Integration",
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
      title: "Voice Assistant Customization",
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
      title: "AI-Powered Lead Qualification",
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
      title: "Sentiment Analysis Bots",
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
      title: "Intelligent FAQ Systems",
      category: "ai-agent",
      description: "AI-powered FAQ system with dynamic content generation and smart search",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["FAQ System", "Dynamic Content", "Smart Search", "AI Powered"],
      results: "60% reduction in support queries",
      client: "HelpDesk Pro",
      link: "#"
    },

    // Mobile App Development
    {
      id: 22,
      title: "iOS & Android App Development",
      category: "mobile",
      description: "Native mobile app development for iOS and Android platforms with optimal performance",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["iOS", "Android", "Native Development", "Performance"],
      results: "4.8 star rating on app stores",
      client: "MobileFirst Co.",
      link: "#"
    },
    {
      id: 23,
      title: "Cross-Platform App Development",
      category: "mobile",
      description: "Flutter and React Native apps for cross-platform compatibility and faster deployment",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tags: ["Flutter", "React Native", "Cross-Platform", "Deployment"],
      results: "50% faster time to market",
      client: "CrossApp Solutions",
      link: "#"
    },
    {
      id: 24,
      title: "UI/UX for Mobile Apps",
      category: "mobile",
      description: "Mobile-optimized user interface and experience design for enhanced user engagement",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Mobile UI", "UX Design", "User Engagement", "Optimization"],
      results: "85% user retention rate",
      client: "AppDesign Studio",
      link: "#"
    },
    {
      id: 25,
      title: "Mobile App Testing & QA",
      category: "mobile",
      description: "Comprehensive testing and quality assurance for mobile applications across devices",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Testing", "QA", "Device Compatibility", "Quality"],
      results: "99% bug-free deployment",
      client: "QualityApps Inc.",
      link: "#"
    },
    {
      id: 26,
      title: "App Store Optimization (ASO)",
      category: "mobile",
      description: "App store optimization to improve visibility and downloads on iOS and Android stores",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
      tags: ["ASO", "App Store", "Visibility", "Downloads"],
      results: "300% increase in app downloads",
      client: "AppBoost Agency",
      link: "#"
    },
    {
      id: 27,
      title: "Backend Integration for Apps",
      category: "mobile",
      description: "Robust backend integration with APIs, databases, and cloud services for mobile apps",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Backend", "API Integration", "Database", "Cloud Services"],
      results: "99.9% uptime and reliability",
      client: "BackendPro",
      link: "#"
    },
    {
      id: 28,
      title: "Push Notification System Setup",
      category: "mobile",
      description: "Advanced push notification system with personalization and automated triggers",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      tags: ["Push Notifications", "Personalization", "Automation", "Engagement"],
      results: "45% increase in user engagement",
      client: "NotifyApp",
      link: "#"
    },

    // Branding Services
    {
      id: 29,
      title: "Brand Identity Design",
      category: "branding",
      description: "Complete brand identity development including visual elements and brand positioning",
      image: "https://images.unsplash.com/photo-1541356665065-730986da9978?w=600&h=400&fit=crop",
      tags: ["Brand Identity", "Visual Design", "Positioning", "Strategy"],
      results: "200% brand recognition increase",
      client: "IdentityBrand Co.",
      link: "#"
    },
    {
      id: 30,
      title: "Logo Design",
      category: "branding",
      description: "Professional logo design that captures brand essence and creates lasting impressions",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Essence", "Visual Identity", "Professional"],
      results: "150% brand recall improvement",
      client: "LogoCraft Studio",
      link: "#"
    },
    {
      id: 31,
      title: "Brand Strategy & Naming",
      category: "branding",
      description: "Strategic brand development including naming, positioning, and market differentiation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Brand Strategy", "Naming", "Positioning", "Differentiation"],
      results: "80% market penetration increase",
      client: "StrategyBrand",
      link: "#"
    },
    {
      id: 32,
      title: "Brand Guidelines Creation",
      category: "branding",
      description: "Comprehensive brand guidelines ensuring consistent brand application across all channels",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Brand Guidelines", "Consistency", "Application", "Standards"],
      results: "95% brand consistency achieved",
      client: "GuidelinesPro",
      link: "#"
    },
    {
      id: 33,
      title: "Brand Voice & Messaging Development",
      category: "branding",
      description: "Strategic brand voice and messaging framework for consistent communication",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      tags: ["Brand Voice", "Messaging", "Communication", "Strategy"],
      results: "70% message clarity improvement",
      client: "VoiceBrand Agency",
      link: "#"
    },
    {
      id: 34,
      title: "Rebranding & Refresh",
      category: "branding",
      description: "Complete brand refresh and modernization to align with current market trends",
      image: "https://images.unsplash.com/photo-1541356665065-730986da9978?w=600&h=400&fit=crop",
      tags: ["Rebranding", "Refresh", "Modernization", "Market Trends"],
      results: "180% brand perception improvement",
      client: "RefreshBrand Co.",
      link: "#"
    },
    {
      id: 35,
      title: "Stationery Design",
      category: "branding",
      description: "Professional stationery design including business cards, letterheads, and corporate materials",
      image: "https://images.unsplash.com/photo-1586953135348-09d14a0aaf82?w=600&h=400&fit=crop",
      tags: ["Stationery", "Business Cards", "Letterheads", "Corporate"],
      results: "Professional brand presence",
      client: "PrintBrand Studio",
      link: "#"
    },

    // Graphic Design Services
    {
      id: 36,
      title: "Social Media Graphics",
      category: "graphic",
      description: "Eye-catching social media graphics designed for maximum engagement across platforms",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
      tags: ["Social Media", "Graphics", "Engagement", "Platforms"],
      results: "300% social engagement increase",
      client: "SocialGraphics Pro",
      link: "#"
    },
    {
      id: 37,
      title: "Banner & Poster Design",
      category: "graphic",
      description: "Professional banner and poster designs for events, promotions, and marketing campaigns",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
      tags: ["Banners", "Posters", "Events", "Marketing"],
      results: "250% event attendance increase",
      client: "EventDesign Studio",
      link: "#"
    },
    {
      id: 38,
      title: "Infographics Design",
      category: "graphic",
      description: "Data visualization through compelling infographics that simplify complex information",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Infographics", "Data Visualization", "Information", "Design"],
      results: "400% information retention",
      client: "DataViz Agency",
      link: "#"
    },
    {
      id: 39,
      title: "Brochure & Flyer Design",
      category: "graphic",
      description: "Professional brochures and flyers that effectively communicate your message and drive action",
      image: "https://images.unsplash.com/photo-1586953135348-09d14a0aaf82?w=600&h=400&fit=crop",
      tags: ["Brochures", "Flyers", "Communication", "Marketing"],
      results: "180% response rate increase",
      client: "PrintDesign Co.",
      link: "#"
    },
    {
      id: 40,
      title: "Presentation Design",
      category: "graphic",
      description: "Compelling presentation designs that captivate audiences and deliver messages effectively",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      tags: ["Presentations", "Design", "Audience", "Communication"],
      results: "90% presentation approval rate",
      client: "PresentationPro",
      link: "#"
    },
    {
      id: 41,
      title: "Product Packaging Design",
      category: "graphic",
      description: "Innovative packaging design that stands out on shelves and enhances brand appeal",
      image: "https://images.unsplash.com/photo-1586953135348-09d14a0aaf82?w=600&h=400&fit=crop",
      tags: ["Packaging", "Product Design", "Brand Appeal", "Innovation"],
      results: "200% shelf appeal increase",
      client: "PackageDesign Studio",
      link: "#"
    },
    {
      id: 42,
      title: "Business Card Design",
      category: "graphic",
      description: "Professional business card designs that make lasting first impressions and build connections",
      image: "https://images.unsplash.com/photo-1541356665065-730986da9978?w=600&h=400&fit=crop",
      tags: ["Business Cards", "Professional", "First Impressions", "Networking"],
      results: "Enhanced professional image",
      client: "CardCraft Design",
      link: "#"
    },

    // Cloud Computing Services
    {
      id: 43,
      title: "Cloud Infrastructure Setup",
      category: "cloud",
      description: "Comprehensive cloud infrastructure setup on AWS, Azure, and Google Cloud Platform",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["AWS", "Azure", "GCP", "Infrastructure"],
      results: "70% cost reduction achieved",
      client: "CloudTech Solutions",
      link: "#"
    },
    {
      id: 44,
      title: "Cloud Migration Services",
      category: "cloud",
      description: "Seamless migration of existing systems to cloud platforms with minimal downtime",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Migration", "Cloud Platforms", "Minimal Downtime", "Seamless"],
      results: "99.9% migration success rate",
      client: "MigrationPro",
      link: "#"
    },
    {
      id: 45,
      title: "Cloud Security Implementation",
      category: "cloud",
      description: "Advanced cloud security measures including encryption, access controls, and monitoring",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Security", "Encryption", "Access Control", "Monitoring"],
      results: "Zero security breaches",
      client: "SecureCloud Inc.",
      link: "#"
    },
    {
      id: 46,
      title: "DevOps & CI/CD Pipeline Setup",
      category: "cloud",
      description: "Automated DevOps processes with continuous integration and deployment pipelines",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["DevOps", "CI/CD", "Automation", "Deployment"],
      results: "80% faster deployment cycles",
      client: "DevOps Solutions",
      link: "#"
    },
    {
      id: 47,
      title: "Cloud Storage Solutions",
      category: "cloud",
      description: "Scalable cloud storage solutions with backup, recovery, and data management features",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["Storage", "Backup", "Recovery", "Data Management"],
      results: "Unlimited scalability achieved",
      client: "StorageCloud Pro",
      link: "#"
    },
    {
      id: 48,
      title: "Cloud Monitoring & Maintenance",
      category: "cloud",
      description: "24/7 cloud monitoring and maintenance services ensuring optimal performance and uptime",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Monitoring", "Maintenance", "Performance", "Uptime"],
      results: "99.99% uptime guaranteed",
      client: "MonitorCloud",
      link: "#"
    },
    {
      id: 49,
      title: "Disaster Recovery Planning",
      category: "cloud",
      description: "Comprehensive disaster recovery planning with automated backup and failover systems",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Disaster Recovery", "Backup", "Failover", "Planning"],
      results: "100% data recovery success",
      client: "RecoveryPlan Co.",
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Teleiocraft Solutions transformed our business completely. Their web design and digital marketing services helped us achieve a 300% increase in conversions. Outstanding work!",
      result: "300% increase in conversions"
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "The AI chatbot they developed for us revolutionized our customer support. We saw a 70% reduction in support tickets while maintaining excellent customer satisfaction.",
      result: "70% reduction in support tickets"
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, GrowthCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Their SEO and content marketing strategy boosted our organic traffic by 500%. The team's expertise and dedication are unmatched in the industry.",
      result: "500% organic traffic increase"
    },
    {
      name: "David Rodriguez",
      role: "CTO, CloudFirst Solutions",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "The cloud migration project was flawless. Teleiocraft helped us reduce infrastructure costs by 70% while improving performance and scalability.",
      result: "70% cost reduction"
    },
    {
      name: "Lisa Thompson",
      role: "Brand Manager, StyleCo",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Their branding and graphic design services completely transformed our brand identity. We've seen a 200% increase in brand recognition since the rebrand.",
      result: "200% brand recognition increase"
    },
    {
      name: "James Wilson",
      role: "Product Manager, AppVenture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "The mobile app they developed for us achieved a 4.8-star rating on both app stores. Their attention to UI/UX details and performance optimization is exceptional.",
      result: "4.8-star app store rating"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 10+ years in digital transformation"
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer passionate about brand storytelling"
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer and AI technology enthusiast"
    },
    {
      name: "Emily Davis",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Data-driven marketer focused on ROI and growth"
    },
    {
      name: "David Wilson",
      role: "Cloud Solutions Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in cloud infrastructure and DevOps automation"
    },
    {
      name: "Lisa Thompson",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in iOS/Android development and UX design"
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

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-[#f2f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real testimonials from satisfied clients who achieved outstanding results
            </p>
          </div>
          
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <Card key={index} className="border-0 shadow-lg bg-white h-full">
                        <CardContent className="p-8 h-full flex flex-col">
                          <div className="flex justify-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center text-green-700">
                              <TrendingUp className="h-4 w-4 mr-2" />
                              <span className="text-sm font-semibold">{testimonial.result}</span>
                            </div>
                          </div>
                          <div className="flex items-center mt-auto">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                              <div className="font-bold text-gray-900">{testimonial.name}</div>
                              <div className="text-gray-600 text-sm">{testimonial.role}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind every successful project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
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
