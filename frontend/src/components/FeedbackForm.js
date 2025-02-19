import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = ({ onFeedbackSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) return; // Ensure fields are filled

    const feedback = { name, email, message };

    try {
      const response = await fetch("https://feedback-app-backend-ynec.onrender.com/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      const data = await response.json();

      if (onFeedbackSubmit) {
        onFeedbackSubmit(data); // ✅ Call function only if it exists
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>We Value Your Feedback!</h2>
      {success && <p className="success-message">✅ Submitted Successfully!</p>}

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          placeholder="Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
