import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/css/carakerjastyle.css';

const AppCaraKerja = (props) => {
  return (
    <div>
        <h2 className="h2-header-card">Ini adalah page Cara Kerja</h2>
    <Container className="container-carakerja">
    <hr></hr>
    <Row className = "row-card">
    <Col sm="4">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Teddy</CardTitle>
          {/* <CardSubtitle>DKI Djakarta</CardSubtitle>
          <CardText>Rp. 30.000.000.00</CardText>
          <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Reza</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 20.000.000.00</CardText>
          <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="cardbox">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Dinda</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 40.000.000.00</CardText>
          <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
       </Col>
      </Row>
      </Container>
      </div>
  );
};

export default AppCaraKerja;