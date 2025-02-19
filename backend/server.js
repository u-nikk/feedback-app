require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); //  Ensure frontend can access backend

//  Improved MongoDB Connection Handling
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process if MongoDB connection fails
  });

//  Define Schema and Model for Feedback
const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

//  Root Route (For Testing)
app.get("/", (req, res) => {
  res.send("✅ Backend server is running! Use /feedback to submit feedback.");
});

//  POST Route for Submitting Feedback
app.post("/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    console.error("❌ Error saving feedback:", error);
    res.status(500).json({ error: "Error saving feedback" });
  }
});

//  GET Route for Retrieving Feedback
app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("❌ Error retrieving feedback:", error);
    res.status(500).json({ error: "Error retrieving feedback" });
  }
});

//  Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
