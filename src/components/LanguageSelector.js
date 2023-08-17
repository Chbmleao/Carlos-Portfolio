import React, { useState } from "react";
import { Us, Br } from "react-flags-select";
import "../styles/LanguageSelectorStyles.css";

const LanguageSelector = () => {
  const [isPtSelected, setIsPtSelected] = useState(true);

  const handleChangeLanguage = (lang) => {
    if (lang === "en") setIsPtSelected(false);

    if (lang === "pt") setIsPtSelected(true);
  };

  return (
    <div className="language-selector">
      <li
        className={"en checkbox " + (!isPtSelected ? "selected" : "")}
        onClick={() => handleChangeLanguage("en")}
      >
        <img src="https://flagcdn.com/us.svg" />
        <p>EN</p>
      </li>
      <li
        className={"pt checkbox " + (isPtSelected ? "selected" : "")}
        onClick={() => handleChangeLanguage("pt")}
      >
        <img src="https://flagcdn.com/br.svg" />
        <p>PT</p>
      </li>
    </div>
  );
};

export default LanguageSelector;
