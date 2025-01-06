const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Succesfully connected to DB');
  } catch (e) {
    console.log('Cannot connect to DB', e.message);
  }
};

module.exports = connectDB;
