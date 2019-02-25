import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';
import '../assets/css/stylenav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLoginModalBox from '../components/AppLoginModalBox';
import AppLoginRegistState from './AppLoginRegistState';

class AppNavbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <Navbar color="light" className="colornav" light expand="md" fixed='top' >
          <NavbarBrand href="/" className="napbar">
          <img src="https://previews.dropbox.com/p/thumb/AAX3_4Qx6ZBsLrZMNgPZ5f_liU_etchcMUc3fRq5gcGv9cepWsN88XBLs2jO_HLJh2wLGLycREBd_9b-LSSo-AYRSVLWsE7knY6oJQPdf1d6EflpFZdqDFO44e5zNeLt6cXUeh5rs57fzgBaWjsrBIDCu_upK9jDMatFcwmHu4emi77Rgt-7KVCclurd0adi4wuq2fhqZkxx1QAiNzQDPWbxwFQRg_L0gfKF4WexmImp_VNwApWAWAgfMzlKE4Sg2jA/p.png?size_mode=5" height ="35" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-app' to='/'>Investasi</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/'>Cara Kerja</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/'>Tentang Kami</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/'>Bantuan</Link>
              </NavItem>
              <AppLoginRegistState/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;