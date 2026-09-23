import React, { useState, useEffect } from 'react';
import { competitionData as fallbackData } from './data/competitionData';
import {
  fetchCompetitionDetails,
  fetchUserStatus,
  registerForCompetition,
  submitPerformance
} from './services/api';

import Header from './components/Header';
import TitleCard from './components/TitleCard';
import JudgeCard from './components/JudgeCard';
import TimerBanner from './components/TimerBanner';
import ImportantDates from './components/ImportantDates';
import PreviousWinners from './components/PreviousWinners';
import CompetitionTabs from './components/CompetitionTabs';
import RewardsTable from './components/RewardsTable';
import TrustSection from './components/TrustSection';
import ReferBanner from './components/ReferBanner';
import ReviewsLink from './components/ReviewsLink';
import AdBanner from './components/AdBanner';
import StickyActionBar from './components/StickyActionBar';
import BottomNavBar from './components/BottomNavBar';

import VideoModal from './components/modals/VideoModal';
import SubmissionModal from './components/modals/SubmissionModal';
import ReviewsModal from './components/modals/ReviewsModal';
import Toast from './components/modals/Toast';

import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('eng');
  const [isDesktopMode, setIsDesktopMode] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('competitions');

  // Backend Live State
  const [compState, setCompState] = useState(null);
  const [userState, setUserState] = useState({ isRegistered: true, isSubmitted: false });
  const [loading, setLoading] = useState(true);
  const [userId] = useState(() => localStorage.getItem('feedants_userId') || `user_${Math.floor(Math.random() * 8999 + 1000)}`);

  // Modal States
  const [videoModal, setVideoModal] = useState({ isOpen: false, url: '', title: '' });
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  // Persist User ID
  useEffect(() => {
    localStorage.setItem('feedants_userId', userId);
  }, [userId]);

  // Load backend data
  const loadData = async () => {
    try {
      const res = await fetchCompetitionDetails('feedants-classical-dance');
      if (res.success) {
        setCompState(res.data);
      }
      const uRes = await fetchUserStatus('feedants-classical-dance', userId);
      if (uRes.success) {
        setUserState({
          isRegistered: uRes.isRegistered,
          isSubmitted: uRes.isSubmitted
        });
      }
    } catch (err) {
      console.warn('Backend API not responding, using offline fallback dataset:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [userId]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 3000);
  };

  const handleOpenVideo = (url, title) => {
    setVideoModal({ isOpen: true, url, title });
  };

  // Handle Dynamic User Registration (Atomic Spot Deduction)
  const handleRegisterUser = async () => {
    try {
      const res = await registerForCompetition('feedants-classical-dance', userId);
      if (res.success) {
        showToast("Successfully registered! Spots updated.");
        setUserState((prev) => ({ ...prev, isRegistered: true }));
        loadData(); // refresh spots count
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Registration failed or full!");
    }
  };

  // Handle Dance Submission Upload
  const handleSubmitSubmission = async (submissionData) => {
    try {
      const res = await submitPerformance('feedants-classical-dance', {
        userId,
        ...submissionData
      });
      if (res.success) {
        showToast("Submission uploaded successfully! Good luck 🎉");
        setUserState((prev) => ({ ...prev, isSubmitted: true }));
        setIsSubmissionOpen(false);
      }
    } catch (err) {
      showToast(err.response?.data?.message || "Submission failed!");
    }
  };

  const staticData = fallbackData[lang];

  // Dynamic merged dataset
  const currentData = {
    ...staticData,
    spotsLeftText: compState ? compState.spotsLeftText : staticData.spotsLeftText,
    bookedText: compState ? compState.bookedText : staticData.bookedText,
    statusBadge: userState.isRegistered ? (lang === 'hi' ? 'पंजीकृत' : 'Registered') : (lang === 'hi' ? 'खुला है' : 'Open'),
    stickyAction: {
      btnText: userState.isSubmitted
        ? (lang === 'hi' ? 'सबमिशन पूरा हुआ' : 'Submission Completed')
        : userState.isRegistered
        ? (lang === 'hi' ? 'सबमिशन अपलोड करें' : 'Upload Submission')
        : (lang === 'hi' ? 'अभी रजिस्टर करें' : 'Register Now'),
      subtext: userState.isRegistered ? (lang === 'hi' ? 'पंजीकृत' : 'Registered') : (lang === 'hi' ? '₹99 केवल' : '₹99 Only')
    }
  };

  return (
    <div className={`app-container ${isDesktopMode ? 'desktop-mode' : ''}`}>
      {/* Top View Toggle Control Bar */}
      <div className="view-toggle-bar">
        <span>Feedants Full-Stack Module</span>
        <button
          className="view-toggle-btn"
          onClick={() => setIsDesktopMode(!isDesktopMode)}
        >
          {isDesktopMode ? <Smartphone size={14} /> : <Monitor size={14} />}
          <span>{isDesktopMode ? "Mobile Frame View" : "Desktop View"}</span>
        </button>
      </div>



      {/* Toast Alert */}
      <Toast message={toastMsg} />

      {/* Main Content */}
      <main className="main-content">
        <Header lang={lang} setLang={setLang} data={currentData} />

        <TitleCard data={currentData} />

        <JudgeCard data={currentData} onOpenVideo={handleOpenVideo} />

        <TimerBanner data={currentData} />

        <ImportantDates data={currentData} />

        <PreviousWinners data={currentData} onOpenVideo={handleOpenVideo} />

        <CompetitionTabs data={currentData} />

        <RewardsTable data={currentData} />

        <TrustSection data={currentData} onOpenVideo={handleOpenVideo} />

        <ReferBanner data={currentData} showToast={showToast} />

        <ReviewsLink data={currentData} onOpenReviews={() => setIsReviewsOpen(true)} />

        <AdBanner data={currentData} />
      </main>

      {/* Sticky Bottom Action Bar */}
      <StickyActionBar
        data={currentData}
        onOpenUpload={() => {
          if (!userState.isRegistered) {
            handleRegisterUser();
          } else {
            setIsSubmissionOpen(true);
          }
        }}
      />

      {/* Bottom Navigation Bar */}
      <BottomNavBar
        data={currentData}
        activeTab={activeNavTab}
        setActiveTab={setActiveNavTab}
        onOpenUpload={() => setIsSubmissionOpen(true)}
      />

      {/* Interactive Popups */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, url: '', title: '' })}
        videoUrl={videoModal.url}
        title={videoModal.title}
      />

      <SubmissionModal
        isOpen={isSubmissionOpen}
        onClose={() => setIsSubmissionOpen(false)}
        onSubmitSubmission={handleSubmitSubmission}
        showToast={showToast}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
      />
    </div>
  );
}
