import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SOBRE" text="Algumas informações sobre mim" />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
