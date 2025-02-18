require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define Schema and Model for Feedback
const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

// Root Route (for testing purposes)
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// POST Route for submitting feedback
app.post("/feedback", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json(feedback);
});

// GET Route for retrieving feedback
app.get("/feedback", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ timestamp: -1 });
  res.json(feedbacks);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
