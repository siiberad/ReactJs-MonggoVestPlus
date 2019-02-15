import React from 'react';
import AppNavbar from '../components/AppNavbar.jsx'
import AppTrx from '../components/AppTrx.jsx';
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
class AppHome extends React.Component {
      render() {
          return(
            <div>
              <AppNavbar />
              <Container>
                <AppTrx/>
              </Container>
            </div>
          )
      }
}

export default AppHome;
