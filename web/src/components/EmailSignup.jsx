import React, { useState } from "react";
import "./EmailSignup.css";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
    const scriptURL = "https://script.google.com/macros/s/AKfycbz3p8nLoCmWjfup6wpNCMYoNOLZ8FLIPS7MMFdcVynoLyRqU8__3nariDtgGoDBRew2/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "cors", // Important for cross-origin requests
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Required by Apps Script
        },
        body: JSON.stringify({ email: email }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("success");
        setMessage("Thank you for joining our waitlist!");
        setEmail(""); // Clear the input field
      } else {
        throw new Error(result.message || "An unknown error occurred.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(`Failed to subscribe. ${error.message}`);
    }
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
              disabled={status === "loading"}
            />
          </div>
          <button
            type="submit"
            className="btn-waitlist"
            disabled={status === "loading"}
          >
            <span className="btn-waitlist-text">
              {status === "loading" ? "Joining..." : "Join our wait list"}
            </span>
          </button>
        </form>
        {message && (
          <p className={`status-message ${status === "error" ? "error" : "success"}`}>{message}</p>
        )}
      </div>
    </section>
  );
};

export default EmailSignup;
