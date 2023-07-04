import "./AboutMeStyles.css";
import imgsrc from "./../assets/carlos.png";

import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-container">
        <div className="aboutme-img">
          <img src={imgsrc}></img>
        </div>
        <div className="aboutme-text">
          <h1>Olá!</h1>
          <h2>Meu nome é Carlos Leão</h2>
          <p>
            Estou no quinto período de graduação em Sistemas de Informação pela
            Universidade Federal de Minas Gerais (UFMG). Já participei do
            desenvolvimento de um software completo chamado Acad Game, uma
            plataforma gameficada que visa engajar mais ao processo de
            frequentar e evoluir na academia. Durante esta experiência, adquiri
            conhecimentos sobre trabalho em equipe, comunicação, desenvolvimento
            back-end e front-end, JavaScript, MySQL, testabilidade e, também,
            autonomia e vontade para aprender novas tecnologias e processos.
          </p>
          <p>
            Além disso, participo de um projeto de iniciação científica, em que
            trabalho com a geolocalização de endereços e lugares, em que
            desenvolvemos funções de acesso e consulta aos dados de
            identificação textual de lugares, usando endereços e nomes
            catalogados. Para a criação e estruturação do banco de dados,
            utilizamos PostgreSQL. Além disso, Python e JavaScript são as
            linguagens utilizadas para o desenvolvimento da interface de buscas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
