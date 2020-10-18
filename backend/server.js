import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();
app.get("/", (req, res) => {
  res.send(`API runnin on ${PORT}`);
});

app.get("/talks", (req, res) => {
  res.send(`@ talks route`);
});

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
