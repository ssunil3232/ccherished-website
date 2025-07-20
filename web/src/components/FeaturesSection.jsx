import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import FeatureComponent from "./FeatureComp";
import "./FeaturesSection.css";
import features from "./features.jsx";

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  React.useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      setDisplayIndex(Math.round(latest));
    });
    return unsubscribe;
  }, [activeIndex]);

  return (
    <section ref={ref} className="features-section">
      <motion.div className="features-content">
        <FeatureComponent feature={features[displayIndex]} />
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
