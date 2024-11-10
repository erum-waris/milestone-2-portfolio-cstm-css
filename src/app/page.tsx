import React from "react";
import AboutSec from "./components/AboutSec";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Project from "./components/Projects/ProjectsDetails";

const Home = () => {
  return (
    <div className="main-page-body ">
      <HeroSection />
      <AboutSec/>
     
    </div>
  );
};

export default Home;
