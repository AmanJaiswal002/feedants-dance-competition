import Competition from '../models/Competition.js';
import Registration from '../models/Registration.js';
import Submission from '../models/Submission.js';

export const submitVideo = async (req, res) => {
  try {
    const { slug } = req.params;
    const { userId, title, danceForm, videoUrl } = req.body;

    if (!userId || !title) {
      return res.status(400).json({ success: false, message: 'userId and title are required' });
    }

    const competition = await Competition.findOne({ slug });
    if (!competition) {
      return res.status(404).json({ success: false, message: 'Competition not found' });
    }

    const registration = await Registration.findOne({
      competitionId: competition._id,
      userId
    });

    if (!registration) {
      return res.status(403).json({
        success: false,
        message: 'Must be registered to upload a competition submission!'
      });
    }

    const submission = await Submission.create({
      competitionId: competition._id,
      userId,
      title,
      danceForm: danceForm || 'Kathak',
      videoUrl: videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      status: 'SUBMITTED'
    });

    res.status(201).json({
      success: true,
      message: 'Dance video submission uploaded successfully!',
      data: submission
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
