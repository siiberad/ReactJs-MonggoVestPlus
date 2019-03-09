import React from 'react';
import AppNavbar from '../components/AppNavbar.jsx'
import "../assets/css/Trx.css"
import { Container, Row, Col } from 'reactstrap';
import ProductDetails from '../components/ProductDetails';
import AppFooter from '../components/AppFooter.jsx';
import ModalProductInvestasi from '../components/ModalProductInvestasi';
import isLoggedIn from '../helpers/loggedIn';
import AppLoginRegistState from '../components/AppLoginRegistState';
class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.match.params.productId
    }
    console.log(props)
  }
  
  render() {
    if (!isLoggedIn()) {
      return <AppLoginRegistState checkAuth={() => { window.location.reload() }} modalLogin={true} />
    }else{
      return (
        <div>
          <Container>
            <AppNavbar />
            <ProductDetails productId={this.state.productId} />
            <Row align="center">
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <ModalProductInvestasi productId={this.state.productId} />
              </Col>
            </Row>
            <AppFooter />
          </Container>
        </div>
      )
    }
  }
}

export default ProductDetailsPage;
