import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCard from '../pages/AppCard';
import AppFooter from '../components/AppFooter';
import { Container, Row, Col } from 'reactstrap';
import '../assets/scss/AppMain.scss';
import AppBanner from './AppBanner';
import AllProductButton from '../components/AllProductButton';

class HomePages extends React.Component{
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppBanner/>
                <h2 className="text-home" md="12">Instrumen Investasi Terpopuler</h2>
                <AppCard/>
                <AllProductButton/>
                <div>
                    <Container>
                        <Row>
                            <a href="#" className="btn btn-white btn-animated">Lihat Lebih Banyak</a>
                        </Row>
                    </Container>
                </div>
                <AppFooter/>
            </div>
        )
    }
}

export default HomePages;