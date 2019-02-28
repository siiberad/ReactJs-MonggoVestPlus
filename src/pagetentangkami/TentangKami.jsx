import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import AppTentangKami from './AppTentangKami';
import AppFooter from '../components/AppFooter';

class TentangKami extends React.Component {
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppTentangKami/>
                <AppFooter/>
            </div>
        )
    }
}

export default TentangKami;