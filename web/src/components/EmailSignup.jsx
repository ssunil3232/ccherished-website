import React, { useState } from "react";
import "./EmailSignup.css";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    // You can add your email subscription logic here
  };

  return (
    <section className="email-signup-section">
      <div className="signup-content">
        <h2 className="signup-title">
          <span className="title-normal">Ready to </span>
          <span className="title-orange mynerve-font">cherish</span>
          <span className="title-normal"> your connections?</span>
        </h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="email-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
              required
            />
          </div>
          <button type="submit" className="btn-waitlist">
            <span className="btn-waitlist-text">Join our wait list</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignup;
