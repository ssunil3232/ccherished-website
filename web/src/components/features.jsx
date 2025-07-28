// src/components/features.jsx

// This is the final corrected data structure.
// It uses the 'image' and 'numberSvg' properties required by FeatureCard.jsx
// and points to the correct paths in your /public/assets folder.

const features = [
  {
    id: 1,
    title: "Gentle nudges",
    description: "Never let friendships fade—Cherie keeps tabs on how long it's been and sends cheerful nudges to help you stay in touch.",
    // --- CORRECTED PROPERTIES & PATHS ---
    image: "/assets/prev-1.svg",      // Main phone mockup for feature 1
    numberSvg: "/assets/num-1.svg",   // Number '1' svg,
    featureSvg: "/assets/feature-1.svg",
  },
  {
    id: 2,
    title: "Smart scheduling",
    description: "Cherie knows your time is precious, so it effortlessly navigates your busy calendar to help you stay connected, no matter how packed your days get.",
    // --- CORRECTED PROPERTIES & PATHS ---
    image: "/assets/prev-2.svg",
    numberSvg: "/assets/num-2.svg",
    featureSvg: "/assets/feature-2.svg",
  },
  {
    id: 3,
    title: "Timezone magic",
    description: "Friendship knows no borders with Cherie by your side, finding the perfect time for friends across different time zones to catch up.",
    // --- CORRECTED PROPERTIES & PATHS ---
    image: "/assets/prev-3.svg",
    numberSvg: "/assets/num-3.svg",
    featureSvg: "/assets/feature-3.svg",
  },
  {
    id: 4,
    title: "Pen memories",
    description: "Cherie helps you remember the little things, capturing special moments and private thoughts for every friend, making your connections even richer.",
    // --- CORRECTED PROPERTIES & PATHS ---
    image: "/assets/prev-4.svg",
    numberSvg: "/assets/num-4.svg",
    featureSvg: "/assets/feature-4.svg",
  },
  {
    id: 5,
    title: "Thoughtful touches",
    description: "Never miss a birthday, anniversary, or milestone—Cherie gently reminds you of the moments that matter most.",
    // --- CORRECTED PROPERTIES & PATHS ---
    image: "/assets/prev-5.svg",
    numberSvg: "/assets/num-5.svg",
    featureSvg: "/assets/feature-5.svg",
  },
];

export default features;
