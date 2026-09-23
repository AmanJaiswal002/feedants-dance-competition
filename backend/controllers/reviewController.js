import Competition from '../models/Competition.js';
import Review from '../models/Review.js';

export const getReviews = async (req, res) => {
  try {
    const { slug } = req.params;
    const competition = await Competition.findOne({ slug });
    if (!competition) {
      return res.status(404).json({ success: false, message: 'Competition not found' });
    }

    const reviews = await Review.find({ competitionId: competition._id }).sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { slug } = req.params;
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({ success: false, message: 'name, rating, comment required' });
    }

    const competition = await Competition.findOne({ slug });
    if (!competition) {
      return res.status(404).json({ success: false, message: 'Competition not found' });
    }

    const review = await Review.create({
      competitionId: competition._id,
      name,
      rating,
      comment
    });

    res.status(201).json({ success: true, data: review });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
