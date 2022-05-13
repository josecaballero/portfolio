import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

const AboutPage = () => {
  return (
    <>
      {/* This avoids <div> wrapper */}
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutPage;
