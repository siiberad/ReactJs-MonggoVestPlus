import React from 'react';
import "../assets/css/Trx.css"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import '../assets/css/productdetail.css';
import axios from 'axios';
import CarouselProductDetail from './CarouselProductDetail'
import AppNavbar from './AppNavbar';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      productModel: '',
      activeTab: '1',
      products: []
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    axios.get(`https://mgvplus.herokuapp.com/products/${this.props.productId}`).then(response => {
      const productName = response.data.productName;
      const productPrice = response.data.productPrice;
      const returnOfInvestment = response.data.returnOfInvestment;
      const contractPeriodInMonth = response.data.contractPeriodInMonth;
      const jumlahTernak = response.data.jumlahTernak;
      const productDetails = response.data.productDetails;
      this.setState({ productName, productPrice, returnOfInvestment, contractPeriodInMonth, jumlahTernak, productDetails });
    });
  }

  render() {

    return (
      <div>
        <AppNavbar />
        <Container className="margin-form">
          <Container className="productTitle">
            <h2>{this.state.productName}</h2>
            <h4>{this.state.productPrice}</h4>
          </Container>
          <Row>
            <Col xs="6">
              <CarouselProductDetail productId={this.props.productId} />
            </Col>
            <Col xs="6">
              <Nav tabs>
                <NavItem className="tab-product-detail">
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Ringkasan
                  </NavLink>
                </NavItem>
                <NavItem className="tab-product-detail">
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Rincian
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <a>
                        {this.state.products.map(product => <text>Periode Kontrak : {product.contractPeriodInMonth} <br />
                        </text>)}
                      </a>
                      <a>
                        Return yang didapat : {this.state.returnOfInvestment} % per periode <br />
                      </a>
                      <a>
                        Periode bagi hasil &emsp; : {this.state.contractPeriodInMonth} bulan <br />
                      </a>
                      <a>
                        Jumlah Ternak &emsp; &emsp;  : {this.state.jumlahTernak} ekor <br />
                      </a>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      {this.state.productDetails}
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <br />

        </Container>
      </div>
    );
  }
}

export default ProductDetails;
