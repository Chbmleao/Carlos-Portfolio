import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-buttons">
          <NavLink to={props.view} className="btn" target="_blank">
            View
          </NavLink>
          <NavLink to={props.source} className="btn" target="_blank">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
