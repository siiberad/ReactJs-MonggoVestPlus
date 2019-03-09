import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/css/cardstyle.css';
import {Link} from 'react-router-dom'

const AppCard = (props) => {
  return (
    <div>
    <Container>
      <hr></hr>
    <Row className = "row-card">
    <Col sm="4">
      <Card>
        <CardImg className="bg-card" src="https://res.cloudinary.com/monggovestplus/image/upload/v1551525910/simmental-1.jpg" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Sapi Simmental</CardTitle>
          <CardSubtitle>Jawa Tengah</CardSubtitle>
          <CardText>Rp. 1.580.050.000,00</CardText>
          {/* <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="card-product">
        <CardImg className="bg-card-home" src="https://res.cloudinary.com/monggovestplus/image/upload/v1551526907/kambing-1-1.jpg" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Kambing Saanen</CardTitle>
          <CardSubtitle>Jawa Barat</CardSubtitle>
          <CardText>Rp. 1.156.800.000,00</CardText>
          {/* <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="card-product">
        <CardImg className="bg-card-home" src="https://res.cloudinary.com/monggovestplus/image/upload/v1551952513/bebek-1.jpg" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Bebek Khaki Campbell</CardTitle>
          <CardSubtitle>Bali</CardSubtitle>
          <CardText>Rp. 200.000.000,00</CardText>
          {/* <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default AppCard;