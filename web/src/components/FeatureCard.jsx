// src/components/FeatureCard.jsx

import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="feature-text-content">
        <div className="section-badge">
            <div className="badge-dot"></div>
            <span className="badge-text">How Cherie shines</span>
        </div>
        <img src={feature.numberSvg} alt={`Feature ${feature.id}`} className="feature-number-img" />
        <div className="feature-item-box">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description-text">{feature.description}</p>
        </div>
      </div>
      <div className="feature-image-container">
        <img
          src={feature.image}
          alt={feature.title}
          className="feature-image"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
