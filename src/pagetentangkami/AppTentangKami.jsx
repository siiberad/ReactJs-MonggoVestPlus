import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../assets/scss/_tentangkamistyle.scss';

const AppTentangKami = (props) => {
  return (
    <div>
      <Container className="container-header-card">
        <h2>Ini adalah page Tentang Kami</h2>
        <hr></hr>
      </Container>
    <Container className="container-header-tentang">
    <Row className = "row-card">
    <Col sm="4" className="box-tentang">
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
      <Col sm="4" className="box-tentang">
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
      <Col sm="4" className="box-tentang">
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
      <Col sm="6" className="box-tentang">
      <Card className="cardbox2">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Dita</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 40.000.000.00</CardText>
          <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      <Col sm="6" className="box-tentang">
      <Card className="cardbox2">
        <CardImg className="bg-card" src="https://cdn-images-1.medium.com/max/1200/1*y03gw83Wj4BYk_sD75gNEA.png" alt="Card image cap" />
        <CardBody className="card-body" >
          <CardTitle>Satria</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Rp. 40.000.000.00</CardText>
          <Button className="bt-card" >Button</Button> */}
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
      <Container className="text-detail">
      <hr></hr>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique vitae minima molestias maiores at, iure quae excepturi nobis. Consectetur, dolorem illo culpa minima at saepe nostrum error temporibus corporis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae iste minus consectetur modi incidunt impedit vel possimus harum unde nihil quos ut accusantium, aliquid blanditiis ullam dolores consequuntur esse. Quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi amet, cum atque perferendis explicabo, natus at autem rerum magnam ea laborum sequi corporis in eaque, consequuntur ab suscipit minima!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla quas eius voluptatem deleniti, odio eum vitae minus dolore error delectus ratione sequi illum rerum, enim expedita voluptates necessitatibus cum.
        </p>
      </Container>
      </div>
  );
};

export default AppTentangKami;