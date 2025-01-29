import mongoose from 'mongoose';

async function connect() {
  try {
    const url = process.env.MONGO_DB_URL;
    if (!url) {
      throw new Error('MONGO_DB_URL is not defined in environment variables');
    }
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection is successful');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connect;
