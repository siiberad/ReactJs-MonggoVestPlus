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
  Input
} from "reactstrap";
import store from 'store';
import axios from "axios";
import loggedIn from '../helpers/loggedIn';
import "../assets/css/stylenav.css";

class AppLoginModalBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
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

  submit(e) {
    e.preventDefault();
    axios
      .post("https://mgvplus.herokuapp.com/api/login", {
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then(function (response) {
        // console.log(response);
        if (response.status === 200) {
          alert('Anda berhasil masuk. Selamat Datang di Monggovestplus');
          localStorage.setItem('JWT_TOKEN', response.data.token)
        } else {alert("telah terjadi error, mohon hubungi tim kami untuk mendapat bantuan", response.status);
      }
        })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      userEmail: "",
      userPassword: ""
    })
    store.set('loggedIn', true);
    
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
              Password:<br />
              <Input type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} placeholder="Masukkan Password " />
            </FormGroup>
          
          <div align="center">
            <Button color="submit" value="Submit" className="btn btn-primary">Masuk</Button>{" "}
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