const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jwt", {
      useNewUrlParser: true,
    });

    console.log("MONGO-DB connected!");
  } catch (e) {
    console.error("Database connection error: ", e);
    process.exit(1);
  }
};

module.exports = connectDB;
