// src/components/FeatureCard.jsx

import React from "react";
import { useTransform, motion } from "framer-motion";
import "./FeatureCard.css"; // Make sure to create this new CSS file

const FeatureCard = ({ feature, index, totalFeatures, scrollYProgress }) => {
  const start = index / totalFeatures;
  const end = (index + 1) / totalFeatures;

  const cardOpacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [start, start + 0.1], ["30px", "0px"]);
  const imageX = useTransform(scrollYProgress, [start, start + 0.1], ["100%", "0%"]);

  return (
    <motion.div style={{ opacity: cardOpacity }} className="feature-card">
      <motion.div style={{ y: textY }} className="feature-text-content">
        <div className="section-badge">
            <div className="badge-dot"></div>
            <span className="badge-text">How Cherie shines</span>
        </div>
        <img src={feature.numberSvg} alt={`Feature ${feature.id}`} className="feature-number-img" />
        <div className="feature-item-box">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description-text">{feature.description}</p>
        </div>
      </motion.div>
      <div className="feature-image-container">
        <motion.img
          style={{ x: imageX }}
          src={feature.image}
          alt={feature.title}
          className="feature-image"
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
