import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppCardAll from '../pageinvestasi/AppCardAll';
import AppFooter from '../components/AppFooter';
import {Table} from 'reactstrap';
import GroupingDropDown from '../components/GroupingDropDown';
import CardPagination from '../components/CardPagination';

import AppCard from './AppCard';
// import '../assets/css/table.css';
import SortingDropDown from '../components/SortingDropdown';



class AllProductPage extends React.Component{
    render(){
        return(
            <div>
               <AppNavbar/> <br/><br/><br/>
               <Table borderless  >
                <tr>
                    <th>Provinsi</th>
                    
                    <th>Urutkan Berdasarkan</th> 
                    
                    <th>Pencarian</th>
                </tr>
                <tr >
                    <td >
                    <GroupingDropDown/>
                    </td>
                    
                    <td >
                    <SortingDropDown/>
                    </td>
                    
                </tr>
                
                
               </Table>
               
                <h2 className="text-home" md="12">NIH PRODUKNYA</h2>
                <AppCardAll/>
                <CardPagination/>
                
                <AppFooter/>
            </div>
        )
    }
}

export default AllProductPage;