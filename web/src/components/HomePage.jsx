import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StorySection from "./StorySection";
import EmailSignup from "./EmailSignup";
import Footer from "./Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <StorySection />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
