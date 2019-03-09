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
import store from 'store';
import { BrowserRouter, Link } from "react-router-dom";
import AppLoginRegistState from './AppLoginRegistState';
import AppUserSetting from './AppUserSetting';


class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLoggedIn: store.get('loggedIn')
    };

    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

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

  checkAuth=()=>{
    this.setState({isLoggedIn: store.get('loggedIn') === true})
  }

  handleLogout() {
    localStorage.removeItem('JWT_TOKEN');
    store.set('loggedIn', false);
    // console.log('di handle logout',store.get('loggedIn'));
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // console.log(isLoggedIn)
    let isActive;

    if (isLoggedIn !== true) {
      isActive = <AppLoginRegistState checkAuth={this.checkAuth}/>;
    } else {
      isActive = <AppUserSetting handleLogout={this.handleLogout}/>;
    }
    return (
      <div>
        <Navbar id="navbar" color="light" className="colornav" light expand="md" fixed='top'>
          <NavbarBrand href="/" className="napbar">
            <img src="https://res.cloudinary.com/monggovestplus/image/upload/v1551762164/logomonggovest.png" height="35" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-app' to='/investasi'>Investasi</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/carakerja'>Cara Kerja</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/tentangkami'>Tentang Kami</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/syarat'>Syarat dan Ketentuan</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-app' to='/bantuan'>Bantuan</Link>
              </NavItem>
              <NavItem>
                {isActive}
              {/* {this.state.isLoggedIn ?
                (<AppLoginRegistState />) : (<AppUserSetting />)} */}
              </NavItem>
              {/* <NavItem>
                  <Link id="bt-nav" to='/login'>Login</Link>
              </NavItem> */}
              <button id="bt-search" to='/search'>
                <Link to='/search'>
                  <img src="https://res.cloudinary.com/monggovestplus/image/upload/v1552120428/icon_search.png" height="35" />
                </Link>
              </button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;