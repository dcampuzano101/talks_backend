import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import talkRoutes from "./routes/talkRoutes.js";

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
app.use("api/users", userRoutes);
app.use("api/talks", talkRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
