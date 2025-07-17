import React, {useState} from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const features = [
    {
      id: 1,
      title: "Gentle nudges",
      description:
        "Never let friendships fade—Cherie keeps tabs on how long it's been and sends cheerful nudges to help you stay in touch.",
      icon: "assets/feature-1.svg",
      isActive: true,
    },
    {
      id: 2,
      title: "Smart scheduling",
      description:
        "Cherie knows your time is precious, so it effortlessly navigates your busy calendar to help you stay connected, no matter how packed your days get.",
      icon: "assets/feature-2.svg",
      isActive: false,
    },
    {
      id: 3,
      title: "Timezone magic",
      description:
        "Friendship knows no borders with Cherie by your side. It finds the perfect time for friends in different time zones to catch up, scheduling chats that work for everyone.",
      icon: "assets/feature-3.svg",
      isActive: false,
    },
    {
      id: 4,
      title: "Pen memories",
      description:
        "Cherie helps you remember the little things, capturing special moments and private thoughts for every friend, making your connections even richer.",
      icon: "assets/feature-4.svg",
      isActive: false,
    },
    {
      id: 5,
      title: "Thoughtful touches",
      description:
        "Never miss a birthday, anniversary, or milestone—Cherie gently reminds you of the moments that matter most.",
      icon: "assets/feature-5.svg",
      isActive: false,
    },
  ];

  return (
    <section className="features-section">
      {/* <div className="section-badge">
        <div className="badge-dot"></div>
        <span className="badge-text">How Cherie shines</span>
      </div> */}
      {/* <p className="features-description">
          With Cherie, you'll never miss a moment that matters. Our smart
          scheduler bridges time zones and hectic lives, finding you the perfect
          moment to connect with your cherished ones so you never lose touch.
        </p> */}

        <div className="features-content">
          <div className="section-badge">
            <div className="badge-dot"></div>
            <span className="badge-text">How Cherie shines</span>
          </div>
          <div className="features-list">
            {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-item ${activeFeature === feature.id ? "active" : ""}`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onFocus={() => setActiveFeature(feature.id)}
              tabIndex={0}
            >
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="feature-description">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.description}</p>
              </div>
            </div>))}
        </div>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`${feature.isActive ? "active" : ""}`}
            >
        <img
            src={`assets/preview-${activeFeature}.svg`}
            alt="iPhone Mockup showing Cherie app"
            className={`iphone-mockup ${activeFeature === feature.id ? "active" : ""}`}
          />
          </div>))}
      </div>
    
    </section>
  );
};

export default FeaturesSection;
