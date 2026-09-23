import React from 'react';
import { Megaphone } from 'lucide-react';

export default function AdBanner({ data }) {
  return (
    <div className="ad-banner-box">
      <Megaphone size={16} />
      <span>{data.adBannerText}</span>
    </div>
  );
}
