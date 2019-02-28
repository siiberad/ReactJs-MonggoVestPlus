import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
import "../assets/css/formstyle.css";

axios.defaults.headers.common['Content-Type'] = 'application/json';

class AppRegistrationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFullName: "",
      userEmail: "",
      userPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    //console.log(name, value);
    let data = {};
    data[name] = value;

    this.setState(data);
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("https://mgvplus.herokuapp.com/api/register", {
        userFullName: this.state.userFullName,
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert("Akun Anda telah berhasil dibuat, silahkan cek e-mail Anda");
        } else {
          alert("telah terjadi error, mohon hubungi tim kami untuk mendapat bantuan", response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({
        userFullName: "",
        userEmail: "",
        userPassword: ""
      })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalRegister}
          toggle={this.props.toggleClose}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggleClose}>DAFTAR</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label>Nama Lengkap: </Label>
                <Input
                  type="text"
                  required="required"
                  name="userFullName"
                  value={this.state.userFullName}
                  placeholder="Nama lengkap Anda"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email: </Label>
                <Input
                  type="text"
                  required="required"
                  name="userEmail"
                  value={this.state.userEmail}
                  placeholder="Alamat email Anda"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password: </Label>
                <Input
                  type="password"
                  required="required"
                  name="userPassword"
                  value={this.state.userPassword}
                  placeholder="Kata Sandi Anda"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <div align="center">
                <Button
                  color="submit"
                  className="btn btn-primary"
                  value="Submit"
                >
                  DAFTAR
                </Button>{" "}
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            Sudah punya akun?
            <a href="#" onClick={this.props.toggleClose}>
              &nbsp;Masuk di sini
            </a>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AppRegistrationModal;