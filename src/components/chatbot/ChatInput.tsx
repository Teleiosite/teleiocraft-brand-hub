
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  onHumanTalk: () => void;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, isTyping, onHumanTalk }: ChatInputProps) => {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Type your message... 💬"
          className="flex-1 rounded-full border-gray-200 focus:border-[#004282] focus:ring-[#004282]/20"
          disabled={isTyping}
        />
        <Button
          onClick={onSend}
          disabled={!value.trim() || isTyping}
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
          onClick={onHumanTalk}
          className="text-xs text-gray-500 hover:text-[#004282] transition-colors duration-200"
        >
          💬 Need to talk to a human?
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
