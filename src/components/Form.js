import React, { Component } from "react";
import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";

class Form extends Component {
  state = {
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
  };

  popupRef = React.createRef();
  formRef = React.createRef();

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetInputValues = () => {
    this.setState({
      userName: "",
      userEmail: "",
      subject: "",
      message: "",
    });
  };

  sendEmail = (e) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, this.formRef.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          this.popupRef.current.toggleClassName();
          this.resetInputValues();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div className="form" id="contact">
        <form ref={this.formRef} onSubmit={this.sendEmail}>
          <label>Seu nome</label>
          <input
            className="text-box"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleInputChange}
          ></input>
          <label>Email</label>
          <input
            className="text-box"
            type="text"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleInputChange}
          ></input>
          <label>Assunto</label>
          <input
            className="text-box"
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          ></input>
          <label>Mensagem</label>
          <textarea
            className="text-box"
            rows="6"
            placeholder="Digite sua mensagem aqui!"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
          <input className="btn" type="submit" value="Send" />
        </form>
        <Popup ref={this.popupRef} />
      </div>
    );
  }
}

export default Form;
