import React, { Component } from 'react'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Container, Col
} from 'reactstrap';
import CarouselProductDetail from './CarouselProductDetail';
import CardsProductDetail from './CardsProductDetail';
import ModalProductInvestasi from './ModalProductInvestasi';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
  
    componentDidMount() {
        let productId = localStorage.getItem('JWT_TOKEN')
        axios.get(`https://mgvplus.herokuapp.com/products/${productId}`).then(response => {
            const productName = response.data.productName;
            const productPrice = response.data.productPrice;
            this.setState({productName, productPrice});
        });
        localStorage.getItem('JWT_TOKEN')
      }
    }

    render() {
        return (
            <Container>
                <div>
                Kambing Saanen
                </div>
                <div>
                Rp. 1.156.800.000,00
                </div>
                <Row>
                    <Col xs="6">
                        <CarouselProductDetail />
                    </Col>
                    <Col xs="6">
                        <CardsProductDetail />
                    </Col>
                </Row>
                <br/>
                <Row align="center">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <ModalProductInvestasi/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
