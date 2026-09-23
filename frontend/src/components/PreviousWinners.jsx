import React from 'react';
import { Play } from 'lucide-react';

export default function PreviousWinners({ data, onOpenVideo }) {
  return (
    <div className="winners-section">
      <h3 className="section-head-title">{data.previousWinnersTitle}</h3>
      
      <div className="winners-scroll-container">
        {data.previousWinners.map((winner) => (
          <div
            key={winner.id}
            className="winner-card"
            onClick={() => onOpenVideo('https://www.youtube.com/embed/dQw4w9WgXcQ', winner.videoTitle)}
          >
            <div className="winner-img-wrap">
              <img src={winner.image} alt={winner.name} className="winner-img" />
              <div className="winner-play-overlay">
                <div className="mini-play-icon">
                  <Play size={12} fill="currentColor" />
                </div>
              </div>
            </div>
            <span className="winner-name">{winner.name}</span>
            <span className="winner-rank">{winner.rank}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
