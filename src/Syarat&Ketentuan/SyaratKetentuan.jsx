import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import AppSyaratKetentuan from './AppSyaratKetentuan';
import AppFooter from '../components/AppFooter';

class SyaratKetentuan extends React.Component {
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppSyaratKetentuan/>
                <AppFooter/>
            </div>
        )
    }
}

export default SyaratKetentuan;