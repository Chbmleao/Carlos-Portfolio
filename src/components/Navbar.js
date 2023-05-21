import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="logo.png" alt="Carlos Leão logo" className="logo" />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
