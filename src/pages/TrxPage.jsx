import React from 'react';
import AppNavbar from '../AppNavbar';
import AppTrx from '../AppTrx';
import "../styles/Trx.css"
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
