import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleWaitlistClick = () => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Use a timeout to ensure the navigation completes before scrolling
      setTimeout(() => {
        const el = document.getElementById("email-signup");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300); // Increased timeout to ensure page loads
    } else {
      // If we're already on the home page, just scroll
      const el = document.getElementById("email-signup");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="top-nav">
      <Link to="/">
        <img
          src="/assets/top-nav-logo.svg"
          alt="Cherie Logo"
          className="logo"
        />
      </Link>
      <button className="btn-waitlist" onClick={handleWaitlistClick}>
        <span className="btn-waitlist-text">Join our wait list</span>
      </button>
    </nav>
  );
};

export default Navigation;
