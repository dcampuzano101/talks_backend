import express from "express";
import {
  createTalk,
  addAttendee,
  removeAttendee,
} from "../controllers/talkController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, createTalk);
router.route("/:id/add_attendee").put(protect, addAttendee);
router.route("/:id/remove_attendee").put(protect, removeAttendee);

export default router;
