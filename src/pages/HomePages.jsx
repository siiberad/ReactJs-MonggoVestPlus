import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCard from '../pages/AppCard';
import AppFooter from '../components/AppFooter';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import '../assets/scss/AppMain.scss';
import AppBanner from './AppBanner';
// import {Link} from 'react-router-dom';

import AppIcon from './AppIcon';


class HomePages extends React.Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <AppBanner/>
                <AppIcon/>
                <h2 className="text-home" md="12">Instrumen Investasi Terpopuler</h2>
                <AppCard/>

                <div>
                    <Container>
                        <Row>
                            <a className="btn btn-white btn-animated"><Link to="/allproduct">TAMPILKAN LEBIH BANYAK</Link></a>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default HomePages;