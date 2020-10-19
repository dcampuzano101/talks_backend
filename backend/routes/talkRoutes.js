import express from "express";
import { createTalk } from "../controllers/talkController.js";
const router = express.Router();

router.route("/").post(createTalk);
