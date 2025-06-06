
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

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

interface QuickReply {
  text: string;
  value: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm your virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies: QuickReply[] = [
    { text: "🌐 Our Services", value: "services" },
    { text: "💰 Pricing", value: "pricing" },
    { text: "📞 Contact Us", value: "contact" },
    { text: "👥 About Team", value: "about" }
  ];

  const chatRules: ChatRule[] = [
    {
      keywords: ["hello", "hi", "hey", "greetings"],
      response: "Hello! 😊 Welcome to Teleiocraft Solutions. I'm here to help you with any questions about our services. What can I assist you with today?"
    },
    {
      keywords: ["services", "what do you do", "offerings"],
      response: "We offer a comprehensive range of digital services including:\n\n🌐 Web Design & Development\n📱 Mobile App Development\n☁️ Cloud Computing Solutions\n🤖 AI Agent Services\n🎨 Graphic Design\n📈 Digital Marketing\n📝 Content Creation\n📱 Social Media Marketing\n\nWhich service interests you most? 🤔"
    },
    {
      keywords: ["web design", "website", "landing page"],
      response: "Our web design services include:\n\n✨ Custom website development\n📱 Responsive design for all devices\n🎯 Landing page optimization\n🔍 SEO-ready structure\n🎨 Beautiful, professional designs\n\nWe create high-converting websites that represent your brand perfectly! 🚀"
    },
    {
      keywords: ["digital marketing", "marketing", "seo", "ppc"],
      response: "Our digital marketing expertise covers:\n\n🔍 SEO optimization\n💰 PPC advertising\n📧 Email marketing campaigns\n📊 Conversion optimization\n📈 Performance tracking & analytics\n\nWe help maximize your online reach and boost conversions! 📊"
    },
    {
      keywords: ["ai", "artificial intelligence", "automation", "chatbot"],
      response: "Our AI Agent Services include:\n\n🤖 Custom chatbot development\n⚙️ Process automation\n📊 Data analysis & insights\n🧠 Machine learning models\n🔧 Custom AI solutions\n\nWe enhance your business processes with cutting-edge AI technology! ⚡"
    },
    {
      keywords: ["app", "mobile", "development", "application"],
      response: "We develop powerful applications for:\n\n📱 iOS platforms\n🤖 Android platforms\n💻 Web applications\n🔌 API development\n🗄️ Database design\n🧪 Testing & deployment\n🛠️ Post-launch support\n\nLet's bring your app idea to life! 🚀"
    },
    {
      keywords: ["cloud", "cloud computing", "infrastructure"],
      response: "Our cloud computing services include:\n\n☁️ Cloud migration strategies\n🏗️ Infrastructure setup\n🔒 Security implementation\n📊 Performance monitoring\n💰 Cost optimization\n🔧 24/7 support\n\nSecure, scalable, and reliable cloud solutions! ⚡"
    },
    {
      keywords: ["price", "pricing", "cost", "how much"],
      response: "Our pricing is customized based on your specific needs! 💰\n\n✨ We offer competitive rates\n🎯 Tailored solutions for every budget\n📞 Free initial consultation\n📊 Detailed project quotes\n\nContact us for a personalized quote - let's discuss your project! 🤝"
    },
    {
      keywords: ["contact", "get in touch", "reach you", "phone", "email"],
      response: "Ready to connect? Here's how to reach us: 📞\n\n📧 Email: TeleiocraftSolutions@gmail.com\n📍 Location: Greater London, United Kingdom\n💬 Or use our Contact page\n\n🆓 Book a FREE consultation today! We'd love to hear about your project. ✨"
    },
    {
      keywords: ["team", "about", "who are you", "company"],
      response: "We're Teleiocraft Solutions - your Brand Builder and Growth Partner! 🚀\n\n👥 Team of 6 experienced professionals\n🎯 Dedicated to helping businesses grow\n💡 Innovative digital solutions\n🏆 Proven track record of success\n\nCheck out our About page to meet the team! 👋"
    },
    {
      keywords: ["portfolio", "work", "examples", "projects"],
      response: "We're proud of our work! 🏆\n\n✅ Successful projects across various industries\n💼 Diverse portfolio of solutions\n⭐ Happy client testimonials\n📈 Proven results\n\nVisit our Portfolio page to see examples of our work and what our clients say! 🌟"
    },
    {
      keywords: ["consultation", "free consultation", "meeting"],
      response: "Yes! We offer FREE consultations! 🎉\n\n📅 Schedule a consultation to discuss your needs\n💡 Get expert advice on your project\n🎯 Learn how we can help you grow\n📞 No commitment required\n\nClick 'Book FREE Consultation Today!' or contact us to get started! ✨"
    },
    {
      keywords: ["support", "help", "assistance", "maintenance"],
      response: "We're here for you every step of the way! 🤝\n\n🔧 Ongoing support & maintenance\n⏰ 24/7 assistance available\n📈 Long-term growth partnership\n✅ Committed to your success\n\nYour success is our priority! 🌟"
    },
    {
      keywords: ["thank", "thanks", "appreciate"],
      response: "You're very welcome! 😊 Is there anything else I can help you with today? Feel free to ask about any of our services or contact us for more detailed information! ✨"
    },
    {
      keywords: ["bye", "goodbye", "see you", "later"],
      response: "Thank you for visiting Teleiocraft Solutions! 👋 Feel free to reach out anytime if you have more questions. Have a wonderful day! 🌟"
    },
    {
      keywords: ["human", "talk to human", "real person"],
      response: "I'd be happy to connect you with our team! 👥\n\n📧 Email us at: TeleiocraftSolutions@gmail.com\n📝 Use our Contact page for detailed inquiries\n📅 Book a FREE consultation\n\nOur human experts are ready to help with your specific needs! 🤝"
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
    
    return "I'm sorry, I didn't quite understand that. 🤔 Could you please rephrase your question? You can ask me about our services, pricing, contact information, or anything else about Teleiocraft Solutions! ✨";
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setShowQuickReplies(false);
    setIsTyping(true);

    // Bot response after a typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(textToSend),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (value: string) => {
    handleSendMessage(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const TypingIndicator = () => (
    <div className="flex justify-start mb-3">
      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md max-w-[80%]">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
          size="lg"
        >
          <MessageSquare className="h-7 w-7 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] shadow-2xl border-0 rounded-2xl overflow-hidden animate-scale-in">
          <CardHeader className="bg-gradient-to-r from-[#004282] to-[#0056b3] text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-white/20 text-white">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-semibold">Teleiocraft Assistant</CardTitle>
                  <p className="text-xs text-white/80">Always here to help 💬</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-2 h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <Avatar className="w-6 h-6 flex-shrink-0">
                      <AvatarFallback className={`text-xs ${message.isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                        {message.isBot ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`p-3 rounded-2xl shadow-sm ${
                        message.isBot
                          ? 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
                          : 'bg-gradient-to-r from-[#004282] to-[#0056b3] text-white rounded-br-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && <TypingIndicator />}
              
              {/* Quick Reply Buttons */}
              {showQuickReplies && messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickReply(reply.value)}
                        className="text-xs bg-white hover:bg-[#004282] hover:text-white border-[#004282]/20 rounded-full transition-all duration-200"
                      >
                        {reply.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message... 💬"
                  className="flex-1 rounded-full border-gray-200 focus:border-[#004282] focus:ring-[#004282]/20"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] rounded-full w-10 h-10 p-0 shadow-md hover:shadow-lg transition-all duration-200"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Talk to Human Option */}
              <div className="mt-3 text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSendMessage("talk to human")}
                  className="text-xs text-gray-500 hover:text-[#004282] transition-colors duration-200"
                >
                  💬 Need to talk to a human?
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
