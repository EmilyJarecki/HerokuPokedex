const mongoose = require('mongoose');
require('dotenv').config();

// get the MongoDB URI from .env file
const connectionStr = process.env.MONGODB_URI;
console.log(connectionStr)

mongoose.set('strictQuery', true);
mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));