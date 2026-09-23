import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-msg">
      <CheckCircle2 size={16} color="#4ade80" />
      <span>{message}</span>
    </div>
  );
}
