import React, { Component } from 'react'
import {Container} from'reactstrap';
import AppProfileEdit from '../components/AppProfileEdit';
import AppNavbar from '../components/AppNavbar';

export default class ProfileEditPage extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container>
          <AppProfileEdit/>
        </Container>
      </div>
    )
  }
}
