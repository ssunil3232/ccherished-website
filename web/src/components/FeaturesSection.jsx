// src/components/FeaturesSection.jsx

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import FeatureCard from "./FeatureCard.jsx";
import features from "./features.jsx";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Create discrete steps for snap-like behavior
  // Each feature gets an equal portion of the scroll progress
  const stepSize = 1 / features.length;
  const scrollSteps = features.map((_, index) => index * stepSize);
  const translateSteps = features.map((_, index) => `-${index * 100}%`);

  const x = useTransform(
    scrollYProgress,
    scrollSteps,
    translateSteps
  );

  return (
    <section ref={ref} className="features-section">
      <div className="features-sticky-container">
        <motion.div
          className="features-horizontal-wrapper"
          style={{ x }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              totalFeatures={features.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
