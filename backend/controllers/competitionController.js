import Competition from '../models/Competition.js';
import Registration from '../models/Registration.js';
import Submission from '../models/Submission.js';

export const getCompetitionDetails = async (req, res) => {
  try {
    const slug = req.params.slug || 'feedants-classical-dance';
    const competition = await Competition.findOne({ slug });

    if (!competition) {
      return res.status(404).json({ success: false, message: 'Competition not found' });
    }

    const spotsLeft = Math.max(0, competition.maxSpots - competition.spotsBooked);

    res.json({
      success: true,
      data: {
        ...competition.toObject(),
        spotsLeft,
        bookedText: `${competition.spotsBooked} / ${competition.maxSpots} Booked`,
        spotsLeftText: `Only ${spotsLeft} spots left`
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getUserStatus = async (req, res) => {
  try {
    const { slug } = req.params;
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId query param required' });
    }

    const competition = await Competition.findOne({ slug });
    if (!competition) {
      return res.status(404).json({ success: false, message: 'Competition not found' });
    }

    const registration = await Registration.findOne({
      competitionId: competition._id,
      userId
    });

    const submission = await Submission.findOne({
      competitionId: competition._id,
      userId
    });

    res.json({
      success: true,
      isRegistered: !!registration,
      isSubmitted: !!submission,
      registration,
      submission
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
