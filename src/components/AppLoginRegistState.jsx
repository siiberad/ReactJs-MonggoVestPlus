import React, { Component } from "react";
import { Button } from "reactstrap";
import AppLoginModalBox from "./AppLoginModalBox";
import AppRegistrationModal from "./AppRegistrationModal";
import '../assets/scss/_loginregister.scss';

export default class AppLoginRegistState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRegister: false,
      modalLogin: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modalLogin: !prevState.modalLogin,
    }));
  }

  toggleClose() {
    this.setState(nextState => ({
      modalRegister: !nextState.modalRegister,
      modalLogin: !nextState.modalLogin
    }));
  }

  render() {
    return (
      <div className="modal-login" id="#ModalLogin">
        <button id="bt-modal" onClick={this.toggle}>
          LOGIN{this.props.buttonLabel}
        </button>
        <AppLoginModalBox
          isOpen={this.state.modalLogin}
          toggle={this.toggle}
          toggleClose={this.toggleClose}
        />
        <AppRegistrationModal
          modalRegister={this.state.modalRegister}
          toggle={this.toggle}
          toggleClose={this.toggleClose}
        />
      </div>
    );
  }
}