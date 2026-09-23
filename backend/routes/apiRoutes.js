import express from 'express';
import { getCompetitionDetails, getUserStatus } from '../controllers/competitionController.js';
import { registerUser } from '../controllers/registrationController.js';
import { submitVideo } from '../controllers/submissionController.js';
import { getReviews, addReview } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/competitions/:slug', getCompetitionDetails);
router.get('/competitions/:slug/user-status', getUserStatus);
router.post('/competitions/:slug/register', registerUser);
router.post('/competitions/:slug/submit', submitVideo);
router.get('/competitions/:slug/reviews', getReviews);
router.post('/competitions/:slug/reviews', addReview);

export default router;
