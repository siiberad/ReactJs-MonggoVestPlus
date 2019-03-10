import React, { Component }  from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardText, Container } from 'reactstrap';
import '../assets/css/cardstyle.css';
import GetAllCards from './GetAllCards';

import axios from 'axios';
class AppHomeCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products:[],
            isLoading: true
          }

    }
    

    componentDidMount(){
      this.loadData(this.props.params);
                
    }
    componentWillReceiveProps(params){
      if(this.props.params != params.params){
        console.log("new params", params);
        this.loadData(params.params)
          
      }
     }

    loadData = (params) =>{
      console.log("data match", params);
             axios.get(`/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=DESC&page=0&size=3`)
      // axios.get("https://mgvplus.herokuapp.com/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=DESC&page=0&size=6")  
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
              console.log("new product", products);
                this.setState({
                  products,
                  isLoading: false
                });
                console.log("mantap",this.state.products)
              })
              .catch(error => this.setState({ error, isLoading: false }));
    }
            
        
        render () {
            let produk = this.state.products.map(product=> {
              return (
                <Col sm="4">
                  <GetAllCards key={product.id}  hai={product} />
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


export default AppHomeCard;