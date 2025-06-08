
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
    <div className="border-t bg-white p-4 pb-safe-bottom" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom) + 1rem)' }}>
      <div className="flex gap-3 items-end mb-4">
        <div className="flex-1 relative">
          <Textarea
            value={value}
            onChange={handleTextareaChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="min-h-[50px] max-h-[120px] resize-none rounded-xl border-2 border-gray-300 focus:border-[#004282] focus:ring-[#004282]/20 px-4 py-3 text-sm leading-relaxed shadow-sm transition-all duration-200 bg-white"
            disabled={isTyping}
            rows={1}
          />
        </div>
        <Button
          onClick={handleSendClick}
          disabled={!value.trim() || isTyping}
          className="bg-gradient-to-r from-[#004282] to-[#0056b3] hover:from-[#003366] hover:to-[#004282] rounded-full w-12 h-12 p-0 shadow-md hover:shadow-lg transition-all duration-200 flex-shrink-0 touch-manipulation"
          size="sm"
          type="button"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Talk to Human Option and Close Button */}
      <div className="flex justify-between items-center">
        <div className="flex-1 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onHumanTalk}
            className="text-sm text-gray-500 hover:text-[#004282] transition-colors duration-200 px-3 py-2 h-auto"
          >
            💬 Need to talk to a human?
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 h-8 w-8 rounded-full transition-all duration-200 flex-shrink-0 ml-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
