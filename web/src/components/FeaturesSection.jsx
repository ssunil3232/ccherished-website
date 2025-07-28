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
    offset: ["start end", "end start"],
  });

  // Calculate horizontal translation based on scroll progress
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(features.length - 1) * 100}%`]
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
