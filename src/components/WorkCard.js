import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

import React from "react";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src="" alt="" />
          <h2 className="project-title">Project Title</h2>
          <div className="project-details">
            <p>This is text</p>
            <div className="project-buttons">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
