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
import axios from "axios";
import "../assets/css/formstyle.css";

axios.defaults.baseURL = 'https://mgvplus.herokuapp.com'
// axios.defaults.baseURL = 'http://localhost:8080'

class AppRegistrationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFullName: "",
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
    //console.log(name, value);
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

  componentDidMount() {
    if (this.props.userPassword) {
      this.setState({ userPassword: this.props.userPassword });
    }
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("/api/register", {
        userFullName: this.state.userFullName,
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then(function (response) {
        // console.log(response);
        if (response.status === 201) {
          alert("Akun Anda telah berhasil dibuat, silahkan cek e-mail Anda");
        }
      })
      .catch(function (error) {
        alert("telah terjadi error, mohon hubungi tim kami untuk mendapat bantuan", error.response.status);
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
      <Modal
        isOpen={this.props.modalRegister}
        toggle={this.props.toggleClose}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>DAFTAR</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.submit}>
            <FormGroup>
              <Label>Nama Lengkap (Sesuai Tanda Pengenal): </Label>
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
                type={this.state.hidden ? "password" : "text"}
                required="required"
                name="userPassword"
                value={this.state.userPassword}
                placeholder="Kata Sandi Anda"
                onChange={this.handleChange}
              />
              <Label check sm={12}>
                <Col sm={12}>
                  <Input
                    type="checkbox"
                    checked={this.state.check}
                    onChange={this.handleChecked}
                  />
                  lihat kata sandi
                </Col>
              </Label>
            </FormGroup>
            <div align="center">
              <Button
                color="submit"
                className="btn btn-primary"
                value="Submit"
              >
                DAFTAR
                </Button>
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
    );
  }
}

export default AppRegistrationModal;