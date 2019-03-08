import React, { Component }  from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardText, Container } from 'reactstrap';
import '../assets/css/cardstyle.css';
import GetAllCards from './GetAllCards';

import axios from 'axios';
class AppCardAll extends Component{
    constructor() {
        super()
        this.state = {
            products:[]
          }

    }
    previousPage = () => {
        if (this.state.currentPage !== 1)
          this.setState((prevState) => ({currentPage: (prevState.currentPage - 1)}))
      }
      nextPage = () => {
        if (this.state.currentPage + 1 < this.state.githubData.lenght)
          this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}))
      }

    componentDidMount(){
             axios.get("https://mgvplus.herokuapp.com/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=DESC&page=0&size=19")
            .then(response =>
              response.data.content.map(product => ({
                  id: `${product.productId}` ,
                name: `${product.productName}` ,
                province: `${product.provinceModel.provinceName}`,
                harga: `${product.hargaModal}`,
                image: `${product.productImage1}`
              }))
              
            
            )
            .then(products => {
                this.setState({
                  products,
                  isLoading: false
                });
              })
              .catch(error => this.setState({ error, isLoading: false }));
                
            }
        
        render () {
            let produk = this.state.products.map(product=> {
              return (
                <Col sm="4">
                  <GetAllCards key={product.id}  product={product} />
                </Col>
              )
            })
            return (
              <Container>
                <Row className = "row-card">
                  {produk}
                </Row>
              </Container>
            )
          }
}


export default AppCardAll;