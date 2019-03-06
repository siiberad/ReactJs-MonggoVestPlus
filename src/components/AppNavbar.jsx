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
          <img src="https://res.cloudinary.com/monggovestplus/image/upload/v1551762164/logomonggovest.png" height ="35" />
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
              {/*<button id="bt-search" to='/search'>*/}
                {/*<Link to='/search'>*/}
                  {/*<img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_1280.png" height="35" />*/}
                {/*</Link>*/}
              {/*</button>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;