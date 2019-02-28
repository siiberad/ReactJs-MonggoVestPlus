import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../assets/css/stylenav.css";

class AppLoginModalBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>MASUK</ModalHeader>
        <ModalBody>
          <form align="stretch">
            Email:
            <br />
            <input type="text" name="email" />
            <br />
            Password:
            <br />
            <input type="text" name="password" />
            <br />
          </form>
          <br />
          <div align="center">
            <Button color="primary" onClick={this.props.toggle}>
              Lanjutkan
            </Button>{" "}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleClose}>
            Registrasi
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AppLoginModalBox;