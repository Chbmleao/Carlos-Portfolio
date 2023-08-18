import React, { useState } from "react";
import "../styles/LanguageSelectorStyles.css";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const [isPtSelected, setIsPtSelected] = useState(true);
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    if (lang === "en") setIsPtSelected(false);
    if (lang === "pt") setIsPtSelected(true);

    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector">
      <li
        className={"en checkbox " + (!isPtSelected ? "selected" : "")}
        onClick={() => handleChangeLanguage("en")}
      >
        <img src="https://flagcdn.com/us.svg" alt="English" />
        <p>EN</p>
      </li>
      <li
        className={"pt checkbox " + (isPtSelected ? "selected" : "")}
        onClick={() => handleChangeLanguage("pt")}
      >
        <img src="https://flagcdn.com/br.svg" alt="Portuguese" />
        <p>PT</p>
      </li>
    </div>
  );
};

export default LanguageSelector;
