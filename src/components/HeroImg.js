import "../styles/HeroImgStyles.css";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import IntroImg from "../assets/hero-bg.jpg";
import ScrollButton from "./ScrollButton";

const HeroImg = () => {
  const [text] = useTypewriter({
    words: ["Front-end", "Back-end", "Banco de dados", "Desenvolvedor"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <div className="hero" id="home">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>OLÁ, ME CHAMO CARLOS LEÃO</p>
        <h1>
          <span>
            {text}
          </span>
          <span>
            <Cursor cursorStyle="|"/>
          </span>
        </h1>
        <div>
          <ScrollButton
            buttonType="btn"
            sectionId="project"
            sectionName="PROJETOS"
          />
          <ScrollButton
            buttonType="btn btn-light"
            sectionId="contact"
            sectionName="CONTATO"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
