import React, { useRef } from "react";
import "./FormStyles.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const form = useRef();

  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleClearFields = () => {
    userNameRef.current.value = "";
    userEmailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    handleClearFields();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Seu nome</label>
        <input
          className="text-box"
          type="text"
          name="user_name"
          ref={userNameRef}
        ></input>
        <label>Email</label>
        <input
          className="text-box"
          type="text"
          name="user_email"
          ref={userEmailRef}
        ></input>
        <label>Assunto</label>
        <input
          className="text-box"
          type="text"
          name="subject"
          ref={subjectRef}
        ></input>
        <label>Mensagem</label>
        <textarea
          className="text-box"
          rows="6"
          placeholder="Digite sua mensagem aqui!"
          name="message"
          ref={messageRef}
        ></textarea>
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
