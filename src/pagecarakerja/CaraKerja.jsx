import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';
import AppCaraKerja from './AppCaraKerja';

class CaraKerja extends React.Component {
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppCaraKerja/>
                <AppFooter/>
            </div>
        )
    }
}

export default CaraKerja;