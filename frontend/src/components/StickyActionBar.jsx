import React from 'react';

export default function StickyActionBar({ data, onOpenUpload }) {
  const { stickyAction } = data;

  return (
    <div className="sticky-action-bar">
      <button className="upload-submission-btn" onClick={onOpenUpload}>
        <span>{stickyAction.btnText}</span>
        <span className="btn-subtext">{stickyAction.subtext}</span>
      </button>
    </div>
  );
}
