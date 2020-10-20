import Talk from "../models/talkModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// @Description: Creates a new talk
// @Route: POST /api/talks
// @Access: Private (update to create protected route // authMiddleware)

const createTalk = asyncHandler(async (req, res) => {
  const { name, location, startTime, endTime } = req.body;

  //CONSULT MIKE ABOUT ITERATING THROUGH AND CHECKING FOR startTime <= prev.endTime
  // const conflictingTalk = await Talk.findOne({ location, startTime, endTime });

  // if (conflictingTalk) {
  //   res.status(400);
  //   throw new Error("Conflicting Talk: Location already booked");
  // }

  const talk = await Talk.create({
    name,
    location,
    startTime,
    endTime,
  });

  if (talk) {
    res.status(201).json({
      _id: talk._id,
      name: talk.name,
      location: talk.location,
      startTime: talk.startTime,
      endTime: talk.endTime,
    });
  } else {
    res.status(400);
    throw new Error("Invalid talk data");
  }
});

// @Description: Add attendee to talk
// @Route: PUT /api/talks/:id
// @Access: Private (update to create protected route // authMiddleware)

const addAttendee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const talk = await Talk.findById(id);

  const user = await User.findById(req.body.userId);

  if (talk && user) {
    talk.attendees.push(user._id);
    const updatedTalk = await talk.save();

    res.json({
      _id: updatedTalk._id,
      name: updatedTalk.name,
      location: updatedTalk.location,
      startTime: updatedTalk.startTime,
      endTime: updatedTalk.endTime,
      attendees: updatedTalk.attendees,
    });
  } else {
    res.status(404);
    throw new Error("Talk or User not found");
  }
});

// @Description: Remove attendee from talk
// @Route: PUT /api/talks/:id/remove_attendee
// @Access: Private (update to create protected route // authMiddleware)

const removeAttendee = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const talk = await Talk.findById(id);

  const user = await User.findById(req.body.userId);

  if (talk && user) {
    const updatedAttendees = talk.attendees.filter((attendee) => {
      return JSON.stringify(user._id) !== JSON.stringify(attendee._id);
    });
    talk.attendees = updatedAttendees;
    const updatedTalk = await talk.save();

    res.json({
      _id: updatedTalk._id,
      name: updatedTalk.name,
      location: updatedTalk.location,
      startTime: updatedTalk.startTime,
      endTime: updatedTalk.endTime,
      attendees: updatedTalk.attendees,
    });
  } else {
    res.status(404);
    throw new Error("Talk or User not found");
  }
});

export { createTalk, addAttendee, removeAttendee };
