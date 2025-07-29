// src/components/FeaturesSection.jsx

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import FeatureCard from "./FeatureCard.jsx";
import features from "./features.jsx";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate which feature to show based on scroll progress
  // Add padding at start and end for better feature 1 and 5 behavior
  const currentFeatureIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0, features.length - 1, features.length - 1]
  );

  // Get the current feature based on scroll progress
  const getCurrentFeature = () => {
    const index = Math.round(currentFeatureIndex.get());
    return features[Math.max(0, Math.min(index, features.length - 1))];
  };

  const [currentFeature, setCurrentFeature] = React.useState(features[0]);

  React.useEffect(() => {
    const unsubscribe = currentFeatureIndex.on('change', () => {
      setCurrentFeature(getCurrentFeature());
    });
    return unsubscribe;
  }, [currentFeatureIndex]);

  return (
    <section ref={ref} className="features-section">
      <div className="features-sticky-container">
        <FeatureCard
          feature={currentFeature}
          scrollYProgress={scrollYProgress}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
