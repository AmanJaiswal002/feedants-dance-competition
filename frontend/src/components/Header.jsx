import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Header({ lang, setLang, data }) {
  return (
    <header className="header-bar">
      <button className="back-btn" onClick={() => alert("Navigating back...")}>
        <ArrowLeft size={18} />
        <span>{data.backText}</span>
      </button>

      <div className="lang-toggle">
        <button
          className={`lang-btn ${lang === 'eng' ? 'active' : ''}`}
          onClick={() => setLang('eng')}
        >
          ENG
        </button>
        <button
          className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
          onClick={() => setLang('hi')}
        >
          हिंदी
        </button>
      </div>
    </header>
  );
}
