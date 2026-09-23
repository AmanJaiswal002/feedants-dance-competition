import React from 'react';
import { Megaphone } from 'lucide-react';

export default function ReferBanner({ data, showToast }) {
  const { referral } = data;

  const handleCopy = () => {
    navigator.clipboard.writeText(referral.link);
    showToast(referral.toastSuccess);
  };

  return (
    <div className="refer-card">
      <div className="refer-header">
        <div className="refer-icon">
          <Megaphone size={18} />
        </div>
        <h3 className="refer-title">{referral.title}</h3>
      </div>

      <div className="refer-input-row">
        <input
          type="text"
          className="refer-link-input"
          value={referral.link}
          readOnly
        />
        <button className="copy-btn" onClick={handleCopy}>
          {referral.copyBtn}
        </button>
      </div>

      <div className="refer-action-row">
        <div className="refer-subtext">
          You earn <span>₹10</span> for every signup
        </div>
        <button className="refer-now-btn" onClick={handleCopy}>
          {referral.referBtn}
        </button>
      </div>
    </div>
  );
}
