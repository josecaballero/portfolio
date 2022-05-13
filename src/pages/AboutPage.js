import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

const AboutPage = () => {
  return (
    <>
      {/* This avoids <div> wrapper */}
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default AboutPage;
