import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import seedCompetition from './seed/seedData.js';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Feedants Competition Backend API is running smoothly' });
});

const startServer = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on port ${PORT}`);
      await connectDB();
      await seedCompetition();
    });
  } catch (err) {
    console.error('❌ Server startup error:', err);
  }
};

startServer();
