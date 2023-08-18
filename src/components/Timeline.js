import "../styles/TimelineStyles.css";

import React from "react";

import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();

  return (
    <div className="timeline" id="timeline">
      <div className="timeline-head">
        <h1>{t("timeline.h1")}</h1>
      </div>
      <div className="timeline-body">
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            {t("timeline.component1.date")}
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">{t("timeline.component1.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component1.p")}</p>
        </div>

        <div className="timeline-component timeline-component-bg component-left">
          <h2 className="timeline-title">{t("timeline.component2.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component2.p")}</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-left">
            {t("timeline.component2.date")}
          </div>
        </div>

        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            {t("timeline.component3.date")}
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">{t("timeline.component3.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component3.p")}</p>
        </div>

        <div className="timeline-component timeline-component-bg component-left">
          <h2 className="timeline-title">{t("timeline.component4.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component4.p")}</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-left">
            {t("timeline.component4.date")}
          </div>
        </div>

        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            {t("timeline.component5.date")}
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">{t("timeline.component5.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component5.p")}</p>
        </div>

        <div className="timeline-component timeline-component-bottom timeline-component-bg component-left">
          <h2 className="timeline-title">{t("timeline.component6.h2")}</h2>
          <p className="timeline-paragraph">{t("timeline.component6.p")}</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
          <div className="timeline-point timeline-point-bottom"></div>
        </div>
        <div className="timeline-component timeline-component-bottom date-component">
          <div className="timeline-date timeline-date-left">
            {t("timeline.component6.date")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
