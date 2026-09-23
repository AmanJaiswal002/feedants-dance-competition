import React from 'react';
import { Home, Compass, Plus, Trophy, User } from 'lucide-react';

export default function BottomNavBar({ data, activeTab, setActiveTab, onOpenUpload }) {
  const { nav } = data;

  return (
    <nav className="bottom-nav-bar">
      <button
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home size={20} />
        <span>{nav.home}</span>
      </button>

      <button
        className={`nav-item ${activeTab === 'explore' ? 'active' : ''}`}
        onClick={() => setActiveTab('explore')}
      >
        <Compass size={20} />
        <span>{nav.explore}</span>
      </button>

      <div className="plus-btn-wrapper" onClick={onOpenUpload}>
        <Plus size={24} />
      </div>

      <button
        className={`nav-item ${activeTab === 'competitions' ? 'active' : ''}`}
        onClick={() => setActiveTab('competitions')}
      >
        <Trophy size={20} />
        <span>{nav.competitions}</span>
      </button>

      <button
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <User size={20} />
        <span>{nav.profile}</span>
      </button>
    </nav>
  );
}
