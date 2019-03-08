import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input,
  Col
} from "reactstrap";
import store from 'store';
import axios from "axios";
import loggedIn from '../helpers/loggedIn';
// import "../assets/css/stylenav.css";
import { request } from "http";

class AppLoginModalBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      check: false,
      hidden: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value);
    let data = {};
    data[name] = value;
    this.setState(data);
  }

  handleChecked = () => {
    this.setState({
      check: !this.state.check,
      hidden: !this.state.hidden
    });
  }

  submit(e) {
    e.preventDefault();
    axios
      // .post("http://localhost:8080/api/login", {
      .post("https://mgvplus.herokuapp.com/api/login", {
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then((response) => {
        // console.log(response, "the response");
        if (response.status === 200) {
          localStorage.setItem('JWT_TOKEN', response.data.token)
          store.set('loggedIn', true);
          alert('Anda berhasil masuk. Selamat Datang di Monggovestplus');
          const token = localStorage.getItem('JWT_TOKEN')
          const tokenParts = token.split('.');
          const encodedPayload = tokenParts[1];
          const rawPayload = atob(encodedPayload);
          const user = JSON.parse(rawPayload);
          localStorage.setItem('USER_ID', user.userId)
          // console.log('userId yang login', localStorage.getItem('USER_ID'))
          this.props.toggle()
          this.props.checkAuth()
        }
      })
      .catch(function (error) {
        // console.log(error, "the error");
        if (error.response.status === 401) {
          alert("Akun Anda belum teraktivasi, silahkan cek e-mail yang telah didaftarkan sebelumnya");
        } else {
          alert("telah terjadi error, mohon hubungi tim kami untuk mendapat bantuan", error.response.status);
        }
      });
    this.setState({
      userEmail: "",
      userPassword: ""
    })

  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>MASUK</ModalHeader>
        <ModalBody>
          <Form align="stretch" onSubmit={this.submit}>
            <FormGroup>
              Email:<br />
              <Input type="text" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} placeholder="Masukkan Email Anda" />
            </FormGroup>
            <FormGroup>
              <Label>Password: </Label>
              <Input type={this.state.hidden ? "password" : "text"} required="required" name="userPassword" value={this.state.userPassword} placeholder="Kata Sandi Anda" onChange={this.handleChange}
              />
              <Label check sm={12}>
                <Col sm={12}>
                  <Input type="checkbox" checked={this.state.check} onChange={this.handleChecked} />lihat kata sandi
                </Col>
              </Label>
            </FormGroup>

            <div align="center">
              <Button color="submit" value="Submit" className="btn-primary">MASUK</Button>{" "}
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>Belum punya akun?<a href="#" onClick={this.props.toggleClose}>
          &nbsp;Daftar di sini
            </a></ModalFooter>
      </Modal>
    );
  }
}

export default AppLoginModalBox;