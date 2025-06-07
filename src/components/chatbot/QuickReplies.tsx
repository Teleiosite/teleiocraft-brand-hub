
import React from 'react';
import { Button } from "@/components/ui/button";

interface QuickReply {
  text: string;
  value: string;
}

interface QuickRepliesProps {
  replies: QuickReply[];
  onReplyClick: (value: string) => void;
}

const QuickReplies = ({ replies, onReplyClick }: QuickRepliesProps) => {
  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 text-center">Quick suggestions:</p>
      <div className="flex flex-wrap gap-2">
        {replies.map((reply, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onReplyClick(reply.value)}
            className="text-xs bg-white hover:bg-[#004282] hover:text-white border-[#004282]/20 rounded-full transition-all duration-200"
          >
            {reply.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;
