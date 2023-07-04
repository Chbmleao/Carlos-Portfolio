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
          <ScrollButton sectionId="home" sectionName="Home" />
        </li>
        <li>
          <ScrollButton sectionId="project" sectionName="Projetos" />
        </li>
        <li>
          <ScrollButton sectionId="aboutme" sectionName="Sobre" />
        </li>
        <li>
          <ScrollButton sectionId="contact" sectionName="Contato" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
