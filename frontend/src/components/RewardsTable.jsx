import React from 'react';

export default function RewardsTable({ data }) {
  return (
    <div className="rewards-card">
      <div className="rewards-head">
        <h3 className="section-head-title">{data.rewardsTitle}</h3>
        <span className="rewards-sub">{data.rewardsSubtitle}</span>
      </div>

      <div className="rewards-list">
        {data.rewards.map((rw, idx) => (
          <div key={idx} className="reward-row">
            <div className="reward-left">
              <span>{rw.icon}</span>
              <span>{rw.rank}</span>
            </div>
            <span className="reward-amount">{rw.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
