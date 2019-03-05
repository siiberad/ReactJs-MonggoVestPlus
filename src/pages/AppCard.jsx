import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
<<<<<<< HEAD
import '../assets/css/cardstyle.css';
import {Link} from 'react-router-dom'
=======
// import '../assets/css/cardstyle.css';
import '../assets/scss/_cardstyle.scss';
>>>>>>> c0f8cd1b76d40a455c56916f3b097af1a59687d5

const AppCard = (props) => {
  return (
    <div>
    <Container>
      <hr></hr>
    <Row className = "row-card">
    <Col sm="4">
<<<<<<< HEAD
      <Card>
        <Link to="./product-details">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
=======
      <Card className="card-product">
        <CardImg className="bg-card-home" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
>>>>>>> c0f8cd1b76d40a455c56916f3b097af1a59687d5
        <CardBody className="card-body" >
          <CardTitle>Sapi Perah</CardTitle>
          <CardSubtitle>Yogyakarta</CardSubtitle>
          <CardText>Rp. 30.000.000.00</CardText>
          {/* <Button className="bt-card" >Button</Button> */}
        </CardBody>
        </Link>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="card-product">
        <CardImg className="bg-card-home" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Kambing Etawa</CardTitle>
          <CardSubtitle>Solo</CardSubtitle>
          <CardText>Rp. 20.000.000.00</CardText>
          {/* <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card className="card-product">
        <CardImg className="bg-card-home" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Sapi Holstein</CardTitle>
          <CardSubtitle>Londo</CardSubtitle>
          <CardText>Rp. 40.000.000.00</CardText>
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