import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  competitionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Competition', required: true },
  userId: { type: String, required: true },
  paymentStatus: { type: String, enum: ['PAID', 'PENDING'], default: 'PAID' },
  registeredAt: { type: Date, default: Date.now }
}, { timestamps: true });

registrationSchema.index({ competitionId: 1, userId: 1 }, { unique: true });

export default mongoose.model('Registration', registrationSchema);
