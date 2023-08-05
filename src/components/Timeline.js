import "../styles/TimelineStyles.css";

import React from "react";

const Timeline = () => {
  return (
    <div className="timeline" id="timeline">
      <div className="timeline-head">
        <h1>Minha linha do tempo</h1>
      </div>
      <div className="timeline-body">
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            12 de Julho, 2020
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">Startup in School 📱</h2>
          <p className="timeline-paragraph">
            Realizei um curso de inovação e empreendedorismo com tecnologia
            realizado pelo Google. Durante o curso tive a oportunidade de
            desenvolver um aplicativo para o auxílio na coleta de lixo na cidade
            de Belo Horizonte. Durante o desenvolvimento, realizamos pesquisas
            de campo e monitorias com especialistas da área.
          </p>
        </div>

        <div className="timeline-component timeline-component-bg component-left">
          <h2 className="timeline-title">Meu Primeiro Site 💻</h2>
          <p className="timeline-paragraph">
            Em 2020 iniciei meus estudos na área de programação. No meu primeiro
            contato com essa área, realizei um curso de HTML e CSS ofertado pela
            Microsoft juntamente com a Junior Achievement. Ao final do curso,
            houve uma competição dos melhores sites desenvolvidos, em que
            alcancei a fase estadual.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-left">
            13 de Agosto, 2020
          </div>
        </div>

        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            15 de Dezembro, 2020
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">Ensino Médio 👨‍🎓</h2>
          <p className="timeline-paragraph">
            Em 2020 me formei no ensino médio no Colégio Espanhol Santa Maria.
            Estudei nessa escola desde os seis anos de idade, em que fiz muitas
            amizades que tenho até hoje 😃😃
          </p>
        </div>

        <div className="timeline-component timeline-component-bg component-left">
          <h2 className="timeline-title">
            Graduação em Sistemas de Informação 👨‍💻
          </h2>
          <p className="timeline-paragraph">
            Em 2021 iniciei minha formação em Sistemas de Informação pela
            Universidade Federal de Minas Gerais (UFMG). Desde o primeiro
            semestre me apaixonei pela universidade e pela área de computação.
            Atualmente estou cursando o sexto período.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-left">
            17 de Maio, 2021
          </div>
        </div>

        <div className="timeline-component date-component">
          <div className="timeline-date timeline-date-right">
            1 de Setembro, 2022
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component timeline-component-bg component-right">
          <h2 className="timeline-title">Iniciação Científica 🥼</h2>
          <p className="timeline-paragraph">
            Desde 2022, trabalho em um projeto de iniciação cientifíca ofertada
            pela UFMG. O projeto envolve coleta e estruturação de dados de
            localização, incluindo endereços e nomes de lugares, criação e
            organização de bancos de dados com esse conteúdo utilizando
            PostgreSQL. Desenvolvimento de funções de acesso e consulta aos
            dados de identificação textual de lugares, usando endereços e nomes
            catalogados. Utilização de Python e JavaScript para a estruturação
            da API para a consulta de endereços.
          </p>
        </div>

        <div className="timeline-component timeline-component-bottom timeline-component-bg component-left">
          <h2 className="timeline-title">Acad Game 💪</h2>
          <p className="timeline-paragraph">
            Em 2022 participei do desenvolvimento do software Acad Game. Acad
            game é uma plataforma gameficada que visa engajar mais ao processo
            de frequentar e evoluir na academia. Tive a oportunidade de
            participar desde a idealização do projeto até seu desenvolvimento e
            realização de testes, em que me envolvi, principalmente, com o
            back-end em JavaScript e banco de dados em MySQL. Esse software é
            melhor explicado na página de projetos.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
          <div className="timeline-point timeline-point-bottom"></div>
        </div>
        <div className="timeline-component timeline-component-bottom date-component">
          <div className="timeline-date timeline-date-left">
            20 de Outubro, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
