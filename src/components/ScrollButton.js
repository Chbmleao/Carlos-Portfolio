import React from "react";
import "../styles/ScrollButtonStyles.css";

class ScrollButton extends React.Component {
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { sectionId, sectionName, buttonType } = this.props;
    return (
      <button
        className={buttonType}
        onClick={() => this.scrollToSection(sectionId)}
      >
        {sectionName}
      </button>
    );
  }
}

export default ScrollButton;
