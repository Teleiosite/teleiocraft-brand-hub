
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { X, Bot } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <CardHeader className="bg-gradient-to-r from-[#004282] to-[#0056b3] text-white p-4 pt-safe-top relative min-h-[60px] flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarFallback className="bg-white/20 text-white">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-lg font-semibold truncate">Teleiocraft Assistant</CardTitle>
            <p className="text-xs text-white/80 truncate">Always here to help 💬</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white hover:bg-white/20 hover:shadow-md p-2 h-8 w-8 rounded-full transition-all duration-200 hover:scale-110 flex-shrink-0 ml-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default ChatHeader;
