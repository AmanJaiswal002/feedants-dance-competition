import React, { useState, useEffect } from 'react';
import { Hourglass, Clock } from 'lucide-react';

export default function TimerBanner({ data }) {
  // Setup countdown starting at 1d 6h 28m 32s (109712 seconds)
  const [secondsLeft, setSecondsLeft] = useState(109712);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec) => {
    const days = Math.floor(totalSec / (24 * 3600));
    const hours = Math.floor((totalSec % (24 * 3600)) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const pad = (num) => String(num).padStart(2, '0');
    return `${pad(days)}d : ${pad(hours)}h : ${pad(mins)}m : ${pad(secs)}s`;
  };

  return (
    <div className="timer-banner">
      <div className="timer-left">
        <div className="timer-icon-wrap">
          <Hourglass size={18} />
        </div>
        <div>
          <div className="timer-label">{data.timer.label}</div>
          <div className="timer-digits">{formatTime(secondsLeft)}</div>
        </div>
      </div>

      <div className="hurry-badge">
        <Clock size={14} />
        <span>{data.timer.hurryText}</span>
      </div>
    </div>
  );
}
