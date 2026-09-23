import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/feedants_competition';

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2000
    });
    console.log('Connect to mongoDB successfully');
  } catch (err) {
    try {
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      await mongoose.connect(uri);
      console.log('Connect to mongoDB successfully');
    } catch (fallbackErr) {
      console.error('❌ Failed to start MongoDB connection:', fallbackErr.message);
      process.exit(1);
    }
  }
};

export default connectDB;
