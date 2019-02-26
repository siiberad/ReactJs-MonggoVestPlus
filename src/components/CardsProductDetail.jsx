import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../assets/css/productdetail.css';
import axios from 'axios';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
    this.state = { products: []
    }
  }

  componentDidMount(){
    axios.get('http://mgvplus.herokuapp.com/products')
    .then(response => {
      this.setState({products:response.data})
      console.log('data kontrak dan roi')
    })
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
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
                  { this.state.products.map(product => <text>Periode Kontrak : {product.contractPeriodInMonth} <br/>
                  </text>)}
                </a>
                <a>
                  Return yang didapat : <br/>
                </a>
                <a>
                  Periode bagi hasil : <br/>
                </a>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                {/* <Card body>
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                  <Button></Button>
                </Card> */}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}