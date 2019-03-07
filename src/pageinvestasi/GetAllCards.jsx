import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../assets/scss/_cardstyle.scss';

class GetAllCards extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    let { name, province, image, harga }  = this.props.product;
    return (
      <div>
        <Card className="card-product animation">
          <CardImg top width="100%" src={image} alt={name} />
          <CardBody className="card-body" >
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{province}</CardSubtitle>
            <CardText>{harga}</CardText>
            <Button >Lihat</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default GetAllCards;