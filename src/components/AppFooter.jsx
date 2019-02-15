import React, { Component } from 'react';
import { Container, Row, Col, CardImg, CardFooter, CardLink } from 'reactstrap';
import '../assets/css/footerstyle.css';

class AppFooter extends Component {
  render() {
    return (
        <div className='div-footer'>
        <Row className='row-footer'>
            <Col md='2' className='col-1'>
                 <CardImg className='img-footer' src='https://previews.dropbox.com/p/thumb/AAX3_4Qx6ZBsLrZMNgPZ5f_liU_etchcMUc3fRq5gcGv9cepWsN88XBLs2jO_HLJh2wLGLycREBd_9b-LSSo-AYRSVLWsE7knY6oJQPdf1d6EflpFZdqDFO44e5zNeLt6cXUeh5rs57fzgBaWjsrBIDCu_upK9jDMatFcwmHu4emi77Rgt-7KVCclurd0adi4wuq2fhqZkxx1QAiNzQDPWbxwFQRg_L0gfKF4WexmImp_VNwApWAWAgfMzlKE4Sg2jA/p.png?size_mode=5'/>
            </Col>
            <Col md='2' className='col-2'>
                <ul className="ul-footer">
                    <li className="text-footer">
                    <a className="link-footer" href='#!'>Investasi</a>
                    </li>
                    <li className="text-footer">
                    <a className="link-footer" href='#!'>Cara Kerja</a>
                    </li>
                </ul>
            </Col>
            <Col md='2' className='col-3'>
                <ul className="ul-footer">
                <li className="text-footer">
                    <a className="link-footer" href='#!'>Tentang Kami</a>
                    </li>
                    <li className="text-footer">
                    <a className="link-footer" href='#!'>Bantuan</a>
                    </li>
                </ul>
            </Col>
            <Col md='6' className='col-4'>
                <ul className="DAK-footer">
                    <li className="text-footer">Download Aplikasi Kami di :</li>
                </ul>
                <CardLink href='/'>
                    <img className="img-footer-2" src="https://image.flaticon.com/icons/png/512/355/355999.png" height='45px'/>
                </CardLink>
                <CardLink href='/'>
                    <img src=""/>
                </CardLink>
            </Col>
        </Row>



        <CardFooter className="card-footer">
            <Container fluid>
                 &copy; {new Date().getFullYear()} Copyright - {" "}
                <a> PT Monggovest Indonesia </a>
            </Container>
        </CardFooter>
        </div>
    );
  }
}

export default AppFooter;