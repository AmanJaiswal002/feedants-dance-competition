import React from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';

export default function ReviewsLink({ data, onOpenReviews }) {
  const { reviews } = data;

  return (
    <div className="reviews-box" onClick={onOpenReviews}>
      <div className="reviews-left">
        <MessageSquare size={18} color="#0d7c80" />
        <div>
          <div className="reviews-title">{reviews.title}</div>
          <div className="reviews-sub">{reviews.subtitle}</div>
        </div>
      </div>
      <ChevronRight size={18} color="#64748b" />
    </div>
  );
}
