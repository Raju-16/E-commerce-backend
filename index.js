const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const registerRoute = require("./routes/registerRoute");

dbConnect();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


app.use("/register", registerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
