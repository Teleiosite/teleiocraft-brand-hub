
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatRule {
  keywords: string[];
  response: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatRules: ChatRule[] = [
    {
      keywords: ["hello", "hi", "hey", "greetings"],
      response: "Hello! Welcome to Teleiocraft Solutions. I'm here to help you with any questions about our services. What can I assist you with today?"
    },
    {
      keywords: ["services", "what do you do", "offerings"],
      response: "We offer a wide range of digital services including Web Design, Digital Marketing, Cloud Computing, App Development, AI Agent Services, Graphic Design, Content Creation, and Social Media Marketing. Which service interests you most?"
    },
    {
      keywords: ["web design", "website", "landing page"],
      response: "Our web design services include custom website development, responsive design, landing page optimization, and SEO-ready structure. We create beautiful, high-converting websites that represent your brand professionally."
    },
    {
      keywords: ["digital marketing", "marketing", "seo", "ppc"],
      response: "Our digital marketing services include SEO optimization, PPC advertising, email marketing, conversion optimization, and performance tracking. We help maximize your online reach and conversions."
    },
    {
      keywords: ["ai", "artificial intelligence", "automation", "chatbot"],
      response: "We offer AI Agent Services including chatbot development, process automation, data analysis, machine learning models, and custom AI solutions to enhance your business processes."
    },
    {
      keywords: ["app", "mobile", "development", "application"],
      response: "We develop custom mobile and web applications for iOS, Android, and web platforms. Our services include API development, database design, testing, deployment, and post-launch support."
    },
    {
      keywords: ["cloud", "cloud computing", "infrastructure"],
      response: "Our cloud computing services include cloud migration, infrastructure setup, security implementation, performance monitoring, cost optimization, and 24/7 support."
    },
    {
      keywords: ["price", "pricing", "cost", "how much"],
      response: "Our pricing varies depending on the specific services and project requirements. We offer customized solutions for every business. Contact us for a free consultation and personalized quote!"
    },
    {
      keywords: ["contact", "get in touch", "reach you", "phone", "email"],
      response: "You can reach us at TeleiocraftSolutions@gmail.com or visit our Contact page to send us a message. We're located in Greater London, United Kingdom. We'd love to hear from you!"
    },
    {
      keywords: ["team", "about", "who are you", "company"],
      response: "Teleiocraft Solutions is your Brand Builder and Growth Partner. We're a team of 6 experienced professionals dedicated to helping businesses grow through innovative digital solutions. Check out our About page to learn more about our team!"
    },
    {
      keywords: ["portfolio", "work", "examples", "projects"],
      response: "We've successfully completed numerous projects across various industries. Visit our Portfolio page to see examples of our work and client testimonials. We're proud of the results we've achieved for our clients!"
    },
    {
      keywords: ["consultation", "free consultation", "meeting"],
      response: "Yes! We offer free consultations to discuss your project needs and how we can help. Click on 'Book FREE Consultation Today!' or contact us through our Contact page to schedule your consultation."
    },
    {
      keywords: ["support", "help", "assistance", "maintenance"],
      response: "We provide ongoing support and maintenance for all our services. Our team offers 24/7 support to ensure your success. We're committed to your long-term growth and satisfaction."
    },
    {
      keywords: ["thank", "thanks", "appreciate"],
      response: "You're very welcome! Is there anything else I can help you with today? Feel free to ask about any of our services or contact us for more detailed information."
    },
    {
      keywords: ["bye", "goodbye", "see you", "later"],
      response: "Thank you for visiting Teleiocraft Solutions! Feel free to reach out anytime if you have more questions. Have a great day!"
    }
  ];

  const findBestResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const rule of chatRules) {
      const matchCount = rule.keywords.filter(keyword => 
        lowerInput.includes(keyword.toLowerCase())
      ).length;
      
      if (matchCount > 0) {
        return rule.response;
      }
    }
    
    return "I'm sorry, I didn't quite understand that. Could you please rephrase your question? You can ask me about our services, pricing, contact information, or anything else about Teleiocraft Solutions!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#004282] hover:bg-[#003366] shadow-lg"
          size="lg"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl border-0">
          <CardHeader className="bg-[#004282] text-white rounded-t-lg py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Teleiocraft Assistant</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-[#004282] text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-[#004282] hover:bg-[#003366]"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
