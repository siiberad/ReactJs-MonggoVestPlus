import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/css/cardstyle.css';
import {Link} from 'react-router-dom'

const AppCard = (props) => {
  return (
    <div>
    <Container>
    <Row className = "row-card">
    <Col sm="4">
      <Card>
        <Link to="./product-details">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Ini Sapiku Kuy</CardTitle>
          <CardSubtitle>DKI Djakarta</CardSubtitle>
          <CardText>Rp. 30.000.000.00</CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
        </Link>
      </Card>
      </Col>
      <Col sm="4">
      <Card>
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 20.000.000.00</CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card>
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 40.000.000.00</CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4" className="cd-card">
      <Card>
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 50.000.000.00</CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4" className="cd-card">
      <Card>
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 35.000.000.00</CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4" className="cd-card">
      <Card>
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText><h5>Rp. 36.000.000.00</h5></CardText>
          <Button className="bt-card" >Button</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default AppCard;