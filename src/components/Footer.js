import { Link } from "react-router-dom";
import "../styles/FooterStyles.css";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="email">
            <Link to="mailto:carlosbmaltaleao@gmail.com" target="_blank">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <h4>carlosbmaltaleao@gmail.com</h4>
            </Link>
          </div>
          <div className="location">
            <Link to="https://goo.gl/maps/xGFqvWQvdr1sXevg9" target="_blank">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <h4>Belo Horizonte, Minas Gerais, Brasil</h4>
            </Link>
          </div>
          <div className="phone">
            <Link to="tel:+5531995537606" target="_blank">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <h4>+55 (31) 99553-7606</h4>
            </Link>
          </div>
          <div className="social">
            <Link to="https://github.com/Chbmleao" target="_blank">
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/carloshenriqueleao/"
              target="_blank"
            >
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
        <div className="right">
          <h4>{t("footer.h4")}</h4>
          <p>{t("footer.p")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
