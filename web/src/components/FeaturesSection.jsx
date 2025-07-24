// src/components/FeaturesSection.jsx

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import FeatureCard from "./FeatureCard.jsx"; // Note this is importing the new component
import features from "./features.jsx";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="features-section">
      <div className="features-sticky-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={index}
            totalFeatures={features.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
