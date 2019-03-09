import React, { Component } from "react";
import { Button } from "reactstrap";
import AppLoginModalBox from "./AppLoginModalBox";
import AppRegistrationModal from "./AppRegistrationModal";

export default class AppLoginRegistState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRegister: false,
      modalLogin: props.modalLogin
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
      <div>
        <Button id="bt-nav" onClick={this.toggle}>
          LOGIN{this.props.buttonLabel}
        </Button>
        <AppLoginModalBox
          isOpen={this.state.modalLogin}
          toggle={this.toggle}
          toggleClose={this.toggleClose}
          checkAuth={this.props.checkAuth}
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