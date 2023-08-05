import { NavLink } from "react-router-dom";
import "../styles/WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <article>
      <div className="project-card">
        <figure>
          <img src={props.imgsrc} alt="" />
        </figure>
        <div className="card-body">
          <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
          </div>
          <NavLink to={props.source} className="read-more" target="_blank">
            Veja mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
