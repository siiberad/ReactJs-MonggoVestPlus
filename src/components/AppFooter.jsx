import React, { Component } from 'react';
import { Container, Row, Col, CardFooter, CardHeader } from 'reactstrap';
import { Link } from "react-router-dom";
import '../assets/scss/_footerstyle.scss';

class AppFooter extends Component {
  render() {
    return (
        <div className='div-footer'>
                <CardHeader>
                <Row className='row-footer'>
                        <img className="logo-footer" src="https://res.cloudinary.com/monggovestplus/image/upload/v1551762164/logomonggovest.png" alt="logofooter" height ="75"/>
                </Row>
                    <Container className="copyright-footer" fluid>
                        &copy; {new Date().getFullYear()} Copyright - {" "}
                        <a> PT Monggovest Indonesia </a>
                    </Container>
                </CardHeader>
                <CardFooter>
                        <ul className="ul-footer">
                            <li className="text-footer">
                            <Link className="link-footer" style={{ textDecoration: 'none' }} to="/allproduct/0/productId/DESC/0">Investasi</Link>
                            </li>
                            <li className="text-footer">
                            <a className="link-footer" href='/carakerja'>Cara Kerja</a>
                            </li>
                            <li className="text-footer">
                            <a className="link-footer" href='/tentangkami'>Tentang Kami</a>
                            </li>
                            <li className="text-footer">
                            <a className="link-footer" href='/bantuan'>Bantuan</a>
                            </li>
                        </ul>
                    
                </CardFooter>
        </div>
    );
  }
}

export default AppFooter;