require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const experimentRoutes = require('./routes/experimentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/experiments', experimentRoutes);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lablog';
const { MongoMemoryServer } = require('mongodb-memory-server');

mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(async (error) => {
    console.error('Error connecting to MongoDB:', error.message);
    console.log('Falling back to In-Memory MongoDB...');
    try {
      const mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
      console.log('Connected to In-Memory MongoDB');
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (fallbackError) {
      console.error('Error starting in-memory database:', fallbackError);
    }
  });
