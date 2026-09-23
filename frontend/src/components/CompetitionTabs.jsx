import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CompetitionTabs({ data }) {
  const [activeTab, setActiveTab] = useState('about');
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="tabs-card">
      <div className="tabs-nav">
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-body">
        {activeTab === 'about' && (
          <>
            <p className="tab-desc-text">
              {expanded ? data.aboutContent.full : data.aboutContent.short}
            </p>
            <button className="view-more-btn" onClick={() => setExpanded(!expanded)}>
              <span>{expanded ? 'View less' : 'View more'}</span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </>
        )}

        {activeTab === 'parameters' && (
          <div className="rules-list">
            {data.parametersContent.map((item, idx) => (
              <div key={idx} className="param-item">
                <div className="param-head">
                  <span>{item.title}</span>
                  <span className="param-weight">{item.weight}</span>
                </div>
                <div className="param-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="rules-list">
            {data.rulesContent.map((rule, idx) => (
              <div key={idx} className="rule-row">
                <div className="rule-dot"></div>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
