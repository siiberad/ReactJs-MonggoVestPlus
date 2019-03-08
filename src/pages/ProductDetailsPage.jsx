import React from 'react';
import AppNavbar from '../components/AppNavbar.jsx'
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
import ProductDetails from '../components/ProductDetails';
import AppFooter from '../components/AppFooter.jsx';
class AppHome extends React.Component {
      render() {
          return(
            <div>
              <AppNavbar/> <br/> <br/> <br/>
            <ProductDetails/> <br/>
            <AppFooter/>
            </div>
          )
      }
}

export default AppHome;
