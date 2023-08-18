import { Link } from "react-router-dom";
import "../styles/NavbarStyles.css";

import React, { useState } from "react";
import ScrollButton from "./ScrollButton";
import LanguageSelector from "./LanguageSelector";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src="logo.png" alt="Carlos Leão logo" className="logo" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <ScrollButton
            sectionId="home"
            sectionName={t("navbar.home")}
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="aboutme"
            sectionName={t("navbar.aboutme")}
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="timeline"
            sectionName={t("navbar.timeline")}
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="project"
            sectionName={t("navbar.project")}
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="contact"
            sectionName={t("navbar.contact")}
            buttonType="navbar"
          />
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <AiOutlineClose size={30} style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
