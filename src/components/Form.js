import React, { Component } from "react";
import "../styles/FormStyles.css";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";

import { withTranslation } from "react-i18next";

class Form extends Component {
  state = {
    userName: "",
    userEmail: "",
    subject: "",
    message: "",
    errors: {
      userName: "Username is required!",
      userEmail: "Email is required!",
    },
  };

  popupRef = React.createRef();
  formRef = React.createRef();

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateErrors();
      console.log(this.state);
    });
  };

  resetInputValues = () => {
    this.setState({
      userName: "",
      userEmail: "",
      subject: "",
      message: "",
      errors: {
        userName: "Username is required!",
        userEmail: "Email is required!",
      },
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

  validateErrors() {
    const validationErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(this.state.userEmail);

    if (!this.state.userName.trim()) {
      validationErrors.userName = "Username is required!";
    }

    if (!this.state.userEmail.trim()) {
      validationErrors.userEmail = "Email is required!";
    } else if (!isEmailValid) {
      validationErrors.userEmail = "Email is not valid!";
    }
    console.log(validationErrors);

    this.setState({ errors: validationErrors }, () => {
      console.log(this.state.errors);
    });
  }

  render() {
    const { t } = this.props;

    const hasErrors = Object.keys(this.state.errors).length > 0;

    return (
      <div className="form" id="contact">
        <h1>{t("form.h1")}</h1>
        <form ref={this.formRef} onSubmit={this.sendEmail}>
          <label>{t("form.name")}</label>
          <input
            className="text-box"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleInputChange}
          ></input>
          <label>{t("form.email")}</label>
          <input
            className="text-box"
            type="text"
            name="userEmail"
            value={this.state.userEmail}
            onChange={this.handleInputChange}
          ></input>
          <label>{t("form.subject")}</label>
          <input
            className="text-box"
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          ></input>
          <label>{t("form.message")}</label>
          <textarea
            className="text-box"
            rows="6"
            placeholder={t("form.messagePlaceholder")}
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          ></textarea>
          <input
            className="btn"
            type="submit"
            value={t("form.send")}
            disabled={hasErrors}
          />
        </form>
        <Popup ref={this.popupRef} />
      </div>
    );
  }
}

export default withTranslation()(Form);
