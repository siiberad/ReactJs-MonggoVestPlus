import React, { Component } from 'react';
import AppFooter from '../components/AppFooter';
import AppNavbar from '../components/AppNavbar';
import AppSearch from './AppSearch';

class Search extends React.Component {
    render(){
        return(
            <div>
                <AppNavbar/>
                <AppSearch/>
                <AppFooter/>
            </div>
        )
    }
}

export default Search;