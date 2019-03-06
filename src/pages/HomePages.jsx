import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCard from '../pages/AppCard';
import AppFooter from '../components/AppFooter';
import { Container, Row, Col } from 'reactstrap';
import '../assets/scss/AppMain.scss';
import AppBanner from './AppBanner';
import {Link} from 'react-router-dom';


class HomePages extends React.Component{
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppBanner/>
                <h2 className="text-home" md="12">Instrumen Investasi Terpopuler</h2>
                <AppCard/>
                
                <div>
                    <Container>
                        <Row>
                            <a href="#" className="btn btn-white btn-animated"><Link to="/allproduct">TAMPILKAN LEBIH BANYAK</Link></a>
                        </Row>
                    </Container>
                </div>
                <AppFooter/>
            </div>
        )
    }
}

export default HomePages;