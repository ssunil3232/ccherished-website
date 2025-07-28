import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const notif1Ref = useRef(null);
  const notif2Ref = useRef(null);
  const subtitleRef = useRef(null);

  const notif1InView = useInView(notif1Ref, { amount: 0.6 });
  const notif2InView = useInView(notif2Ref, { amount: 0.6 });
  const subtitleInView = useInView(subtitleRef, { amount: 0.7 });

  return (
    <section className="hero-section">
      <div className="hero-content">
        
        <h1 className="hero-title">
          <div className="hero-logo">
          <img src="/assets/logoOnly.svg" alt="Cherie Logo" className="logo-image" />
        </div>
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
          {/* First Notification: Curve in from left-bottom */}
          <motion.div
            className="first-notification"
            ref={notif1Ref}
            initial={{ x: -120, y: 60, opacity: 0, rotate: -10 }}
            animate={
              notif1InView
                ? { x: 0, y: 0, opacity: 1, rotate: 0 }
                : { x: -120, y: 60, opacity: 0, rotate: -10 }
            }
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 15,
              delay: 0.15
            }}
          >
            <span className="notification-text purple">Life gets busy…</span>
            <img
              src="/assets/notif-1.svg"
              alt="Notification 1"
              className="notification-image"
            />
          </motion.div>
          {/* Second Notification: Curve in from right-top */}
          <motion.div
            className="second-notification"
            ref={notif2Ref}
            initial={{ x: 120, y: -60, opacity: 0, rotate: 10 }}
            animate={
              notif2InView
                ? { x: 0, y: 0, opacity: 1, rotate: 0 }
                : { x: 120, y: -60, opacity: 0, rotate: 10 }
            }
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 15,
              delay: 0.35
            }}
          >
            <span className="notification-text critical">Birthdays slip?</span>
            <img
              src="/assets/notif-2.svg"
              alt="Notification 2"
              className="notification-image"
            />
          </motion.div>
          {/* Hero subtitle: fade in */}
          <motion.p
            className="hero-subtitle"
            ref={subtitleRef}
            initial={{ opacity: 0 }}
            animate={subtitleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          >
            Calls just don't happen.
          </motion.p>
        </div>
        <div className="cherie-center caption-normal">
          <span className="cherie-img">
            <img src="assets/cherie-text.svg" alt="Cherie" className="cherie-logo" />
          </span>{" "}
          keeps track for you, nudging you at the right moment,
          <br />
          to help you stay present with the people that <span className="caption-orange mynerve-font">matter</span>.
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
