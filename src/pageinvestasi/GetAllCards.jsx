import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../assets/scss/_cardstyle.scss';
import {Link} from 'react-router-dom';

class GetAllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productModel: '',
  }
  }
  
  render () {
    let { id, name, province, image, harga }  = this.props.product;
    return (
      <div>
        <Card className="card-product animation">
          <CardImg top width="100%" src={image} alt={name} />
          <CardBody className="card-body" >
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{province}</CardSubtitle>
            <CardText>{harga}</CardText>
            <Button>
              <Link to={{ pathname: `/product-details${id}`}}>
              Lihat 
              </Link>
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default GetAllCards;