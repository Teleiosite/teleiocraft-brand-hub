
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, X } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  onHumanTalk: () => void;
  onClose: () => void;
}

const ChatInput = ({ value, onChange, onSend, onKeyPress, isTyping, onHumanTalk, onClose }: ChatInputProps) => {
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

  const handleSendClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (value.trim() && !isTyping) {
      onSend();
    }
  };

  return (
    <div className="border-t bg-white p-3 sm:p-4 pb-6 sm:pb-8">
      <div className="flex gap-2 sm:gap-3 items-end">
        <div className="flex-1 relative">
          <Textarea
            value={value}
            onChange={handleTextareaChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="min-h-[44px] sm:min-h-[50px] max-h-[120px] resize-none rounded-full border-gray-300 focus:border-[#004282] focus:ring-[#004282]/20 px-3 sm:px-4 py-3 sm:py-4 pb-4 sm:pb-6 text-sm leading-relaxed shadow-sm transition-all duration-200 border-2"
            disabled={isTyping}
            rows={1}
          />
        </div>
        <Button
          onClick={handleSendClick}
          disabled={!value.trim() || isTyping}
          className="bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] rounded-full w-11 h-11 sm:w-12 sm:h-12 p-0 shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0 touch-manipulation"
          size="sm"
          type="button"
        >
          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
      
      {/* Talk to Human Option and Close Button */}
      <div className="mt-2 sm:mt-3 flex justify-between items-center">
        <div className="flex-1 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onHumanTalk}
            className="text-xs sm:text-sm text-gray-500 hover:text-[#004282] transition-colors duration-200 px-2 py-1"
          >
            💬 Need to talk to a human?
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 sm:p-2 h-7 w-7 sm:h-8 sm:w-8 rounded-full transition-all duration-200 flex-shrink-0"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
