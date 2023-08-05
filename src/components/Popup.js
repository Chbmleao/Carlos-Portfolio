import React, { Component } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "../styles/PopupStyles.css";

class Popup extends Component {
  state = {
    isOpen: false,
  };

  toggleClassName = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={`popup ${isOpen ? "open-popup" : ""}`} id="popup">
        <AiOutlineCheck className="check" />
        <h2>Obrigado!</h2>
        <p>Obrigado pelo contato. Sua mensagem foi enviada com sucesso.</p>
        <button className="btn" type="button" onClick={this.toggleClassName}>
          OK
        </button>
      </div>
    );
  }
}

export default Popup;
