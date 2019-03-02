import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';
import '../assets/scss/_navbarstyle.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLoginModalBox from '../components/AppLoginModalBox';
import AppLoginRegistState from './AppLoginRegistState';

// const ListLink = (props) => (

// );

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    // this.navHiden = this.navHiden.bind(this);

    
  //   if (typeof window !== 'undefined') {
  //     let prevScrollpos = window.pageYOffset;
  //     window.onscroll = function () {
  //       const maxScroll = document.body.clientHeight - window.innerHeight;
  //       let currentScrollPos = window.pageYOffset;
  //       if (
  //         (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll)
  //         || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
  //         || (prevScrollpos <= 0 && currentScrollPos <= 0)
  //       ) {
  //         document.getElementById("navbar").style.top = "0";
  //       } else {
  //         document.getElementById("navbar").style.top = "-5.0rem";
  //       }
  //       prevScrollpos = currentScrollPos;
  //     }
  //   }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="navbar" color="light" className="colornav" light expand="md" fixed='top'>
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
                <Link className='nav-app' to='/carakerja'>Cara Kerja</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/tentangkami'>Tentang Kami</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/bantuan'>Bantuan</Link>
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