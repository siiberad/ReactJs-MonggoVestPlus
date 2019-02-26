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
    }

    render() {
        return (
            <Container>
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
