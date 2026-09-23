import React from 'react';
import { X, Star } from 'lucide-react';

const mockReviews = [
  { name: "Priya Sharma", rating: 5, date: "2 days ago", comment: "Awesome platform! Judge Manju Dubey gave really detailed feedback on my Kathak posture. Loved it!" },
  { name: "Anand Verma", rating: 5, date: "1 week ago", comment: "Fair judging, quick certificate distribution and seamless prize payout to my Razorpay account." },
  { name: "Sneha Reddy", rating: 4, date: "2 weeks ago", comment: "Great classical dance event. Very well structured timer and dates schedule." }
];

export default function ReviewsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} />
        </button>
        <h3 className="modal-title">Participant Reviews</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
          {mockReviews.map((rev, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: 12, borderRadius: 10, border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{rev.name}</span>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>{rev.date}</span>
              </div>
              <div style={{ display: 'flex', gap: 2, margin: '4px 0' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < rev.rating ? "#f59e0b" : "none"}
                    color={i < rev.rating ? "#f59e0b" : "#cbd5e1"}
                  />
                ))}
              </div>
              <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.4 }}>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
