import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCarousel from '../pages/AppCarousel';
import AppCard from '../pages/AppCard';
import AppFooter from '../components/AppFooter';

class HomePages extends React.Component{
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppCarousel/>
                <h2 className="text-home" md="12">Langkah Mudah Berinvestasi</h2>
                <AppCard/>
                <AppFooter/>
            </div>
        )
    }
}

export default HomePages;