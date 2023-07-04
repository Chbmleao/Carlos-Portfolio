import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from "react";
import ScrollButton from "./ScrollButton";

const Navbar = () => {
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
      <ul className="nav-menu">
        <li>
          <ScrollButton
            sectionId="home"
            sectionName="Home"
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="aboutme"
            sectionName="Sobre"
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="project"
            sectionName="Projetos"
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="timeline"
            sectionName="Experiência"
            buttonType="navbar"
          />
        </li>
        <li>
          <ScrollButton
            sectionId="contact"
            sectionName="Contato"
            buttonType="navbar"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
