import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppTrx from '../components/AppTrx';
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
class TrxPage extends React.Component {
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

export default TrxPage;
