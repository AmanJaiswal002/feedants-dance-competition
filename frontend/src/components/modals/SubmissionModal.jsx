import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function SubmissionModal({ isOpen, onClose, onSubmitSubmission, showToast }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [danceType, setDanceType] = useState('Kathak');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a title for your dance performance!");
      return;
    }
    setSubmitting(true);

    if (onSubmitSubmission) {
      await onSubmitSubmission({
        title,
        danceForm: danceType,
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      });
    } else {
      setTimeout(() => {
        showToast("Submission uploaded successfully!");
        onClose();
      }, 1000);
    }
    setSubmitting(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={16} />
        </button>

        {submitting ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <CheckCircle2 size={54} color="#0d7c80" />
            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a' }}>Sending to Server...</h3>
            <p style={{ fontSize: 13, color: '#64748b' }}>Your dance entry is being saved to database.</p>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Upload Dance Submission</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 4, display: 'block' }}>Performance Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Kathak Tarana Solo by Ananya"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#475569', marginBottom: 4, display: 'block' }}>Classical Dance Category</label>
                <select className="form-input" value={danceType} onChange={(e) => setDanceType(e.target.value)}>
                  <option value="Kathak">Kathak</option>
                  <option value="Bharatanatyam">Bharatanatyam</option>
                  <option value="Odissi">Odissi</option>
                  <option value="Kuchipudi">Kuchipudi</option>
                  <option value="Mohiniyattam">Mohiniyattam</option>
                  <option value="Kathakali">Kathakali</option>
                  <option value="Manipuri">Manipuri</option>
                </select>
              </div>

              <div className="dropzone" onClick={() => document.getElementById('video-input').click()}>
                <UploadCloud size={32} color="#0d7c80" />
                {file ? (
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0d7c80' }}>Selected: {file.name}</span>
                ) : (
                  <>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Click to select video file</span>
                    <span style={{ fontSize: 11, color: '#64748b' }}>MP4, MOV up to 100MB (1 - 3 mins)</span>
                  </>
                )}
                <input
                  id="video-input"
                  type="file"
                  accept="video/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>

              <button type="submit" className="submit-form-btn" disabled={submitting}>
                Confirm & Submit Video
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
