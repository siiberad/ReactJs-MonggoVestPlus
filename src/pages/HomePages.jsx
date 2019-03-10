import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppHomeCard from '../components/AppHomeCard';
import AppFooter from '../components/AppFooter';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import '../assets/scss/AppMain.scss';
import AppBanner from './AppBanner';

import AppIcon from './AppIcon';


class HomePages extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <AppNavbar />
                    <AppBanner />
                    <AppIcon />
                    <h2 className="text-home" md="12">Instrumen Investasi Terpopuler</h2>
                    <AppHomeCard />
                    <div>
                        <Container>
                            <Row>
                                <a className="btn btn-white btn-animated"><Link style={{ textDecoration: 'none' }} to="/allproduct/0/productId/DESC/0">TAMPILKAN LEBIH BANYAK</Link></a>
                            </Row>
                        </Container>
                    </div>
                    <AppFooter />
                </div>
            </div>
        )
    }
}

export default HomePages;