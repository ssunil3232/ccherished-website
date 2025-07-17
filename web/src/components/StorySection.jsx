import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-header">
        <h2 className="title-text">
          <span className="title-normal">Because </span>
          <span className="title-orange mynerve-font">staying close </span>
          <span className="title-normal">
            shouldn't feel like another meeting
          </span>
        </h2>
        <p className="story-description">
          Between scattered time zones, relentless calendars, and that "
          <span className="bold-text">let's catch up soon</span>" text that
          never happens, meaningful connections almost always get pushed to the
          bottom of our to-do lists.
        </p>
        <div className="section-badge">
          <div className="badge-dot"></div>
          <span className="badge-text">The Cherie Story</span>
        </div>
      </div>

      <div className="story-content">
        <p className="story-text">
          We wanted to build a simple, thoughtful companion to make
          staying close feel effortless—reminding you to reach out, celebrate
          special moments, and keep memories alive.<br/>Cherie exists to help turn
          distance and time into opportunities for deeper connection, every
          single day.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
