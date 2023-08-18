import "../styles/AboutMeStyles.css";
import imgsrc1 from "./../assets/carlos1.jpg";
import imgsrc2 from "./../assets/carlos2.png";

import React from "react";
import FlipCard from "./FlipCard";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutme-container">
        <div className="aboutme-img">
          <FlipCard imgsrc1={imgsrc1} imgsrc2={imgsrc2} />
        </div>
        <div className="aboutme-text">
          <h1>{t("aboutme.h1")}</h1>
          <h2>{t("aboutme.h2")}</h2>
          <p>{t("aboutme.p1")}</p>
          <p>{t("aboutme.p2")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
