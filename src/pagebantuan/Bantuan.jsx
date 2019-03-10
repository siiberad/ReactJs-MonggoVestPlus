import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppBantuan from '../pagebantuan/AppBantuan';
import AppFooter from '../components/AppFooter';

class Bantuan extends React.Component {
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppBantuan/>
                <AppFooter/>
            </div>
        )
    }
}

export default Bantuan;