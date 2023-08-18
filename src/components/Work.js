import "../styles/WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";

import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div className="work-container" id="project">
      <h1 className="project-heading">{t("work.h1")}</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          const translationText = "work.workData" + (ind + 1) + ".";

          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={t(translationText + "title")}
              text={t(translationText + "text")}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
