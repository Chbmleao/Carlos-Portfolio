import "../styles/FlipCardStyles.css";
import React from "react";

const FlipCard = ({ imgsrc1, imgsrc2 }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imgsrc1} alt="It's me smiling"></img>
        </div>
        <div className="flip-card-back">
          <img src={imgsrc2} alt="It's me with sunglasses"></img>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
