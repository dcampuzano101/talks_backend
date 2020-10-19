import express from "express";
import {
  createTalk,
  addAttendee,
  removeAttendee,
} from "../controllers/talkController.js";
const router = express.Router();

router.route("/").post(createTalk);
router.route("/:id").put(addAttendee);
router.route("/:id").patch(removeAttendee);

export default router;
