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
// class AppCardAll extends Component{
//     state = {
//         products: [],
//         isLoading: true,
//         errors: null
//       };
//     //   constructor (props){

//     //     super (props);
//     //     this.state = {
//     //         isLoading: true,
//     //         errors: null,
//     //         product:[]
//     //     }
//     // }
  
//     componentDidMount(){
//      axios.get("http://localhost:8080/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=DESC&page=0&size=6")
//     .then(response =>
//       response.data.content.map(product => ({
//         name: `${product.productName}` ,
//         province: `${product.provinceModel.provinceName}`,
//         harga: `${product.hargaModal}`,
//         image: `${product.productImage1}`
//       }))
//     )
//     .then(products => {
//         this.setState({
//           products,
//           isLoading: false
//         });
//       })
//       .catch(error => this.setState({ error, isLoading: false }));
        
//     }
  
//     render() {
//         const { isLoading, products} = this.state;
//         return (
            
//           <React.Fragment>
//               <Container>
//             <hr></hr>
//     <Row className = "row-card"></Row>
//             <h2>Random User</h2>
//             <div>
//               {!isLoading ? (
//                 products.map(product => {
//                   const { name, province, image, harga } = product;
//                   return (
//                     <Col md= "2" className = "card">
//                     <Card>
//                     <CardImg top width="100%" src={image} alt={name} />
//                     <CardBody>
//                         <CardTitle>{name}</CardTitle>
//                         <CardSubtitle>{province}</CardSubtitle>
//                         <CardText>{harga}</CardText>
//                         <Button>pilih</Button>
//                         </CardBody>
//                 </Card>
//                 </Col>
//                     // <div key={name}>
//                     //   <p>{name}</p>
//                     //   <div>
//                     //     <img src={image} alts={province} />
//                     //   </div>
//                     //   <p>{hargaModal}</p>
//                     //   <hr />
//                     // </div>
//                   );
//                 })
//               ) : (
//                 <p>Loading...</p>
//               )}
//             </div>
//             </Container>
//           </React.Fragment>
//         );
//       }
// }

export default AppCardAll;