import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="top-nav">
        <img
          src="/assets/top-nav-logo.svg"
          alt="Cherie Logo"
          className="logo"
        />
      <button className="btn-waitlist"
      onClick={() => {
        const el = document.getElementById("email-signup");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      >
        <span className="btn-waitlist-text">Join our wait list</span>
      </button>
    </nav>
  );
};

export default Navigation;
