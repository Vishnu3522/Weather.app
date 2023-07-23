import React, { useState } from 'react';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      message: ''
    });
    alert('Thank you for your anonymous feedback!');
  };

  return (
    <div className="feedback feedback-form">
      <h1 className="feedback-title form-title">Anonymous Feedback Form</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-group form-group">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your feedback here..."
            required
          />
        </div>
        <button type="submit" className="feedback-button">Submit Feedback</button>
      </form>
      <p className="feedback-note">
        Your feedback is valuable to us. Please feel free to share your thoughts openly and honestly.
      </p>
    </div>
  );
};

export default FeedbackForm;
