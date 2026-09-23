import Competition from '../models/Competition.js';
import Review from '../models/Review.js';

const seedCompetition = async () => {
  const existing = await Competition.findOne({ slug: 'feedants-classical-dance' });
  if (existing) {
    return existing;
  }

  const competition = await Competition.create({
    slug: 'feedants-classical-dance',
    title: 'Feedants Classical Dance',
    category: 'Classical Dance',
    tags: ['Dance', 'Multi-Win'],
    prizePool: 1500,
    entryFee: 99,
    maxSpots: 20,
    spotsBooked: 1,

    judge: {
      name: 'Manju Dubey',
      title: 'Professional Kathak Dancer',
      experience: '12+ Years of Experience',
      avatarUrl: '/assets/judge.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    dates: {
      registerBefore: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 6 * 60 * 60 * 1000),
      submissionStarts: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      submissionEnds: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      resultDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
    },

    rewards: [
      { rank: '1st Winner', amount: '₹ 550', icon: '🏆' },
      { rank: '2nd Winner', amount: '₹ 300', icon: '🥈' },
      { rank: '3rd Winner', amount: '₹ 240', icon: '🥉' },
      { rank: '4th Winner', amount: '₹ 200', icon: '⭐' },
      { rank: '5th Winner', amount: '₹ 130', icon: '⭐' },
      { rank: '6th Winner', amount: '₹ 80', icon: '⭐' }
    ],

    tabs: {
      about: {
        short: "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance.",
        full: "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance. Whether you perform Kathak, Bharatanatyam, Odissi, Kuchipudi, or any Indian classical style, expert judge Manju Dubey will review each performance video with constructive feedback and certification."
      },
      parameters: [
        { title: "Rhythm & Timing (Taal)", weight: "30%", desc: "Precision in beat matching, footwork clarity, and rhythmic synchronization." },
        { title: "Expressions & Emotions (Abhinaya)", weight: "30%", desc: "Facial expressions, eye movements, and storytelling intensity." },
        { title: "Technique & Grace (Nritta)", weight: "25%", desc: "Posture, mudras, body balance, and smooth movement transitions." },
        { title: "Costume & Presentation (Aaharya)", weight: "15%", desc: "Traditional costume accuracy, neatness, and stage presence." }
      ],
      rules: [
        "Open to participants of all age categories from any location worldwide.",
        "Video duration must be between 60 seconds and 180 seconds (1 - 3 minutes).",
        "Solo classical Indian dance forms only (Kathak, Bharatanatyam, Odissi, Kathakali, Mohiniyattam, Kuchipudi, etc.).",
        "Video must be recorded in high clarity with clear audio soundtrack.",
        "Editing or speed modulation of performance video is strictly prohibited.",
        "Judges' evaluation decisions will be final and binding for all participants."
      ]
    }
  });

  await Review.create([
    { competitionId: competition._id, name: 'Priya Sharma', rating: 5, comment: 'Awesome platform! Judge Manju Dubey gave really detailed feedback on my Kathak posture.' },
    { competitionId: competition._id, name: 'Anand Verma', rating: 5, comment: 'Fair judging, quick certificate distribution and seamless prize payout to my Razorpay account.' },
    { competitionId: competition._id, name: 'Sneha Reddy', rating: 4, comment: 'Great classical dance event. Very well structured timer and dates schedule.' }
  ]);

  return competition;
};

export default seedCompetition;
