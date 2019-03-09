import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppTrx from '../components/AppTrx';
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
class TrxPage extends React.Component {
  constructor(props){
  super(props)
  this.state={
    productId : this.props.match.params.productId
  }
}
      render() {
        
        return(
  
            <div>
              <AppNavbar />
              <Container>
                <AppTrx productId={this.state.productId}/>
              </Container>
            </div>
          )
      }
}

export default TrxPage;
