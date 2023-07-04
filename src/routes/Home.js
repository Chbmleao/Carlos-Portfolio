import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import Form from "../components/Form";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutMe />
      <Timeline />
      <Work />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
