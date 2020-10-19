import Talk from "../models/talkModel.js";

// Description: Creates a new talk
// Route: POST /api/talks
// Access: Private (update to create protected route // authMiddleware)

const createTalk = async (req, res) => {
  const { name, location, startTime, endTime } = req.body;

  const conflictingTalk = await Talk.findOne({ location, startTime, endTime });

  if (conflictingTalk) {
    res.status(400);
    throw new Error("Conflicting Talk: Location already booked");
  }

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
};
