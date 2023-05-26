import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>OLÁ, ME CHAMO CARLOS LEÃO</p>
        <h1>Desenvolvedor</h1>
        <div>
          <Link to="/project" className="btn">
            PROJETOS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTATO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
