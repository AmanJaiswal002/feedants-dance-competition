import React from 'react';
import { Info, Play, ShieldCheck } from 'lucide-react';

export default function TrustSection({ data, onOpenVideo }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="disclaimer-box">
        <Info size={18} style={{ flexShrink: 0, marginTop: 1 }} />
        <span>{data.disclaimer}</span>
      </div>

      <div
        className="payout-video-card"
        onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ', data.payoutCard.title)}
      >
        <div className="payout-left">
          <div className="play-circle">
            <Play size={16} fill="currentColor" />
          </div>
          <div className="payout-info">
            <span className="payout-title">{data.payoutCard.title}</span>
            <span className="payout-sub">{data.payoutCard.subtitle}</span>
          </div>
        </div>
      </div>

      <div className="trust-badges-row">
        <div className="trust-badge-item">
          <ShieldCheck size={16} color="#0d7c80" />
          <span>{data.trustBadges.refund}</span>
        </div>
        <div className="trust-badge-item">
          <ShieldCheck size={16} color="#0d7c80" />
          <span>{data.trustBadges.secure} <span className="razorpay-text">{data.trustBadges.gateway}</span></span>
        </div>
      </div>
    </div>
  );
}
