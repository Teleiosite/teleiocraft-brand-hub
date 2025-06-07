
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
      size="lg"
    >
      <MessageSquare className="h-7 w-7 text-white" />
    </Button>
  );
};

export default ChatButton;
