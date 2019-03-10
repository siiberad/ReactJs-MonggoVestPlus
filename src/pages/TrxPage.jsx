import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppTrx from '../components/AppTrx';
import {Link} from 'react-router-dom';
import isLoggedIn from '../helpers/loggedIn';
import AppLoginRegistState from '../components/AppLoginRegistState';
import "../assets/css/Trx.css"
import {Container} from'reactstrap';
import completedProfile from '../helpers/completedProfile';

class TrxPage extends React.Component {
  constructor(props){
  super(props)
  this.state={
    productId : this.props.match.params.productId,
    lotTaken: this.props.location.state.lotTaken
  }
}
      render() {
        // let renderThis;
        // if (completedProfile !== true) {
        //   renderThis = <Link to={{ pathname: `/profile/edit`}}/>;
        // } else {
        //   renderThis = <AppTrx productId={this.state.productId} lotTaken={this.state.lotTaken}/>
        // }
        return(
            <div>
              <AppNavbar />
              <Container>
                {/* {renderThis} */}
                <AppTrx productId={this.state.productId} lotTaken={this.state.lotTaken}/>
              </Container>
            </div>
          )
      }
}

export default TrxPage;
