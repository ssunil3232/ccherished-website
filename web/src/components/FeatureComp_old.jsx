import React, {useState} from "react";
import "./FeatureComp.css";

const FeatureComponent = ({ feature }) => {

  return (
        <div className="features-detail">
          <div className="features-list">
            <div className="section-badge">
              <div className="badge-dot"></div>
              <span className="badge-text">How Cherie shines</span>
            </div>
              <div className="number-container">
                <img src={`assets/num-${feature.id}.svg`} alt="numbering" className="item-number" />
              </div>
              <div key={feature.id}
                className={`feature-item active`} >
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-description">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-text">{feature.description}</p>
                </div>
              </div>
            {/* ))} */}
          </div>
          <div className="mockup-container">
            <img src={`assets/prev-${feature.id}.svg`} alt="iPhone Mockup showing Cherie app" className={`iphone-mockup`} />
          </div>
        </div>
  );
};

export default FeatureComponent;
