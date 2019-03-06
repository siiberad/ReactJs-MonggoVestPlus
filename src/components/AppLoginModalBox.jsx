import React from "react";
import { Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input} from "reactstrap";
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
        <ModalHeader toggle={this.toggle}>MASUK</ModalHeader>
          <ModalBody>
                <Form align="stretch" onSubmit={this.handleSubmit}>
                <FormGroup>
                Email:<br/>
                    <Input type="text" name="userEmail" placeholder="Masukkan Email Anda"/>
                </FormGroup>
                <FormGroup>
                Password:<br/>
                    <Input type="password" name="userPassword" placeholder="Masukkan Password " />
                </FormGroup>                       
                </Form>
                <div align="center">
                <Button  color="primary" onClick={this.toggle}>Lanjutkan</Button>{' '}
                </div>
          </ModalBody>
          <ModalFooter>Belum punya akun?<a href="#" onClick={this.props.toggleClose}>
              &nbsp;Masuk di sini
            </a></ModalFooter>
        </Modal>
    );
  }
}

export default AppLoginModalBox;