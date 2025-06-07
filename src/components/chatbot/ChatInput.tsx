
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    onChange(textarea.value);
    
    // Auto-resize functionality
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t bg-white p-4 pb-6">
      <div className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <Textarea
            value={value}
            onChange={handleTextareaChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="min-h-[50px] max-h-[120px] resize-none rounded-full border-gray-300 focus:border-[#004282] focus:ring-[#004282]/20 px-4 py-3 text-sm leading-relaxed shadow-sm transition-all duration-200 border-2"
            disabled={isTyping}
            rows={1}
          />
        </div>
        <Button
          onClick={onSend}
          disabled={!value.trim() || isTyping}
          className="bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] rounded-full w-11 h-11 p-0 shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0"
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
