import "./HeroImg2Styles.css";

import React, { Component } from "react";
import HeroImg from "../assets/hero-bg2.jpg";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero2">
        <div className="mask">
          <img className="hero-img" src={HeroImg} alt="HeroImg"></img>
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
