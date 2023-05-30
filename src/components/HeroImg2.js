import "./HeroImg2Styles.css";

import React from "react";
import HeroImg from "../assets/hero-bg2.jpg";

const HeroImg2 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={HeroImg} alt="HeroImg"></img>
      </div>
      <div className="heading">
        <h1>This is a heading</h1>
        <p>This is text</p>
      </div>
    </div>
  );
};

export default HeroImg2;
