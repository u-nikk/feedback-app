import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [expandedFeedback, setExpandedFeedback] = useState({}); // ✅ Track expanded messages

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedMode !== null) {
      setDarkMode(savedMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    fetch("https://feedback-app-backend-ynec.onrender.com/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedback:", error));
  }, []);

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  // ✅ Toggle Read More/Read Less
  const toggleReadMore = (index) => {
    setExpandedFeedback((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <h1>Feedback Form</h1>
      <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />

      <h2>Feedbacks Received</h2>
      <div className="feedback-container">
        <ul className="feedback-list">
          {feedbacks.length > 0 ? (
            (showAll ? feedbacks : feedbacks.slice(0, 3)).map((feedback, index) => (
              <li key={index} className="feedback-item">
                <span className="feedback-name">{feedback.name}</span>
                <p className="feedback-message">
                  {expandedFeedback[index] || feedback.message.length <= 100
                    ? feedback.message
                    : feedback.message.substring(0, 100) + "..."}
                </p>
                {feedback.message.length > 100 && (
                  <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
                    {expandedFeedback[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </li>
            ))
          ) : (
            <p className="no-feedback">No feedback submitted yet.</p>
          )}
        </ul>

        {feedbacks.length > 3 && (
          <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
