import "../styles/HeroImgStyles.css";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import IntroImg from "../assets/hero-bg.jpg";
import ScrollButton from "./ScrollButton";
import { useTranslation } from "react-i18next";

const HeroImg = () => {
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [
      t("home.words.front"),
      t("home.words.back"),
      t("home.words.data"),
      t("home.words.dev"),
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="hero" id="home">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>{t("home.content.p")}</p>
        <h1>
          <span>{text}</span>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </h1>
        <div className="buttons">
          <ScrollButton
            buttonType="btn"
            sectionId="project"
            sectionName={t("home.content.project")}
          />
          <ScrollButton
            buttonType="btn btn-light"
            sectionId="contact"
            sectionName={t("home.content.contact")}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
