import Competition from '../models/Competition.js';
import Registration from '../models/Registration.js';

export const registerUser = async (req, res) => {
  try {
    const { slug } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId is required' });
    }

    const updatedComp = await Competition.findOneAndUpdate(
      {
        slug,
        $expr: { $lt: ['$spotsBooked', '$maxSpots'] }
      },
      { $inc: { spotsBooked: 1 } },
      { new: true }
    );

    if (!updatedComp) {
      const compCheck = await Competition.findOne({ slug });
      if (!compCheck) {
        return res.status(404).json({ success: false, message: 'Competition not found' });
      }
      return res.status(400).json({
        success: false,
        message: 'Registration full! No participation spots remaining.'
      });
    }

    try {
      const registration = await Registration.create({
        competitionId: updatedComp._id,
        userId,
        paymentStatus: 'PAID'
      });

      const remainingSpots = updatedComp.maxSpots - updatedComp.spotsBooked;

      res.status(201).json({
        success: true,
        message: 'Successfully registered for competition!',
        data: {
          registration,
          spotsBooked: updatedComp.spotsBooked,
          maxSpots: updatedComp.maxSpots,
          remainingSpots
        }
      });
    } catch (regErr) {
      await Competition.updateOne({ _id: updatedComp._id }, { $inc: { spotsBooked: -1 } });
      return res.status(409).json({
        success: false,
        message: 'User is already registered for this competition!'
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
