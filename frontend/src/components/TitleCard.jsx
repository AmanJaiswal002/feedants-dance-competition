import React from 'react';
import { Check, Trophy, Users } from 'lucide-react';

export default function TitleCard({ data }) {
  return (
    <div className="card-box title-card">
      <div className="title-header-row">
        <h1 className="comp-title">{data.title}</h1>
        <div className="registered-badge">
          <Check size={14} />
          <span>{data.statusBadge}</span>
        </div>
      </div>

      <div className="tags-row">
        {data.tags.map((tag, idx) => (
          <span key={idx} className="tag-chip">{tag}</span>
        ))}
        <span className="certificate-tag">
          <Trophy size={14} />
          {data.certificateBadge}
        </span>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">{data.prizePoolLabel}</span>
          <span className="stat-value">{data.prizePoolAmount}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">{data.entryFeeLabel}</span>
          <span className="stat-value">{data.entryFeeAmount}</span>
        </div>
      </div>

      <div className="spots-box">
        <div className="spots-text">
          <Users size={14} />
          <span>{data.spotsLeftText}</span>
        </div>
        <div className="spots-progress-bg">
          <div className="spots-progress-fill" style={{ width: '8%' }}></div>
        </div>
        <span className="spots-count-sub">{data.bookedText}</span>
      </div>
    </div>
  );
}
