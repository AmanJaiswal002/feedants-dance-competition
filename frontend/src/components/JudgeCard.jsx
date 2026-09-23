import React from 'react';
import { Play } from 'lucide-react';

export default function JudgeCard({ data, onOpenVideo }) {
  const { judge } = data;

  return (
    <div className="judge-card">
      <div className="judge-left">
        <img src={judge.avatar} alt={judge.name} className="judge-avatar" />
        <div className="judge-info">
          <span className="judge-role">{judge.label}</span>
          <h2 className="judge-name">{judge.name}</h2>
          <span className="judge-sub">{judge.title}</span>
          <span className="judge-exp">{judge.experience}</span>
        </div>
      </div>

      <button
        className="video-play-btn-column"
        onClick={() => onOpenVideo(judge.videoUrl, `${judge.name} - Intro Video`)}
      >
        <div className="play-circle">
          <Play size={16} fill="currentColor" />
        </div>
        <span className="play-label">{judge.buttonText}</span>
      </button>
    </div>
  );
}
