
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
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
  );
};

export default ChatMessage;
