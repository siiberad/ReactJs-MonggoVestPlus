import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "../assets/css/Trx.css"
import {Container} from'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Container className="margin-form">
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>Product</Label>
                <Col sm={10}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Nomor Rekening</Label>
                <Col sm={10}>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={2}>Nama Bank</Label>
                <Col sm={10}>
                  <Input type="select" name="select" id="exampleSelect" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="checkbox2" sm={2}>Checkbox</Label>
                <Col sm={{ size: 10 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="checkbox2" />{' '}
                      Check me out
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
        </Container>
      </div>
    );
  }
}