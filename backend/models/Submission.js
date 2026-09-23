import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  competitionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  danceForm: { type: String, default: 'Kathak' },
  videoUrl: { type: String, default: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  status: { type: String, enum: ['SUBMITTED', 'UNDER_REVIEW', 'APPROVED'], default: 'SUBMITTED' },
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Submission', submissionSchema);
