import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-gray">Building relationships a </span>
          <span className="hero-orange mynerve-font">connection</span>
          <span className="hero-gray"> at a time</span>
        </h1>
        <div className="mockup-container">
          <img
            src="/assets/main-mockup.svg"
            alt="iPhone Mockup"
            className="hero-mockup"
          />
          <p className="hero-subtitle">Calls just don't happen.</p>
          <div className="first-notification">
            <span className="notification-text purple">Life gets busy…</span>
            <img
              src="/assets/notif-1.svg"
              alt="Notification 1"
              className="notification-image"
            />
          </div>
          <div className="second-notification">
            <span className="notification-text critical">Birthdays slip?</span>
            <img
              src="/assets/notif-2.svg"
              alt="Notification 2"
              className="notification-image"
            />
          </div>
        </div>
        
        <div class="cherie-center caption-normal">
          <span class="cherie-img">
            <img src="assets/cherie-text.svg" alt="Cherie" class="cherie-logo" />
          </span> keeps track for you, nudging you at the right moment,
          <br/>to help you stay present with the people that <span className="caption-orange mynerve-font">matter</span>.
        </div>
        <h2 className="title-text">
          <span className="title-normal">Because </span>
          <span className="title-orange mynerve-font">every </span>
          <span className="title-normal">connection counts</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
