import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Seu nome</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Assunto</label>
        <input type="text"></input>
        <label>Mensagem</label>
        <textarea rows="6" placeholder="Digite sua mensagem aqui!"></textarea>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
