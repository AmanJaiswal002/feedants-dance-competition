import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, default: 'Classical Dance' },
  tags: [{ type: String }],
  prizePool: { type: Number, required: true, default: 1500 },
  entryFee: { type: Number, required: true, default: 99 },
  maxSpots: { type: Number, required: true, default: 20 },
  spotsBooked: { type: Number, required: true, default: 1 },
  
  judge: {
    name: { type: String, default: 'Manju Dubey' },
    title: { type: String, default: 'Professional Kathak Dancer' },
    experience: { type: String, default: '12+ Years of Experience' },
    avatarUrl: { type: String },
    videoUrl: { type: String }
  },

  dates: {
    registerBefore: { type: Date, required: true },
    submissionStarts: { type: Date, required: true },
    submissionEnds: { type: Date, required: true },
    resultDate: { type: Date, required: true }
  },

  rewards: [
    {
      rank: { type: String },
      amount: { type: String },
      icon: { type: String }
    }
  ],

  tabs: {
    about: {
      short: { type: String },
      full: { type: String }
    },
    parameters: [
      {
        title: { type: String },
        weight: { type: String },
        desc: { type: String }
      }
    ],
    rules: [{ type: String }]
  }
}, { timestamps: true });

export default mongoose.model('Competition', competitionSchema);
