import React from 'react';
import AppNavbar from '../components/AppNavbar.jsx'
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
import ProductDetails from '../components/ProductDetails';
class AppHome extends React.Component {
      render() {
          return(
            <div>
              <AppNavbar />
              <Container>
                <ProductDetails/>
              </Container>
            </div>
          )
      }
}

export default AppHome;
