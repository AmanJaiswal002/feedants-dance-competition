import React from 'react';
import { Calendar, Send, Upload, Trophy } from 'lucide-react';

const iconMap = {
  calendar: Calendar,
  send: Send,
  upload: Upload,
  trophy: Trophy
};

export default function ImportantDates({ data }) {
  return (
    <div className="dates-card">
      <h3 className="section-head-title">{data.importantDatesTitle}</h3>
      
      <div className="dates-grid">
        {data.dates.map((item, idx) => {
          const IconComp = iconMap[item.icon] || Calendar;
          return (
            <div key={idx} className="date-item">
              <div className="date-icon">
                <IconComp size={18} />
              </div>
              <div className="date-details">
                <span className="date-label">{item.label}</span>
                <span className="date-val">{item.date}</span>
                <span className="date-time">{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
