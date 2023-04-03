const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
    // return connect;
  } catch (error) {}
};

module.exports = dbConnect;
