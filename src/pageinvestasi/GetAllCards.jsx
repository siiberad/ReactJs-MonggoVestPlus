import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../assets/scss/_cardstyle.scss';
import {Link} from 'react-router-dom';
import Currency from 'react-currency-formatter';

class GetAllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productModel: '',
  }
  }
  
  render () {
    let { id, name, province, image, harga }  = this.props.hai;
    return (
      <div>
        <Card className="card-product animation" top width="100%" >
        <Link to={{pathname : `/product-details/${id}`}}  style={{ textDecoration: 'none' }} >
          <CardImg top width="100%" src={image} alt={name} />
          <CardBody className="card-body"  style={{  borderColor: '#333' }}>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{province}</CardSubtitle>
            <CardText ><b><Currency quantity={harga} currency="IDR" locale="id_ID"  /></b></CardText>
            <Buttoncolor="primary">
              Lihat
              </Button>
          </CardBody>
          </Link>
        </Card>
      </div>
    )
  }
}

export default GetAllCards;