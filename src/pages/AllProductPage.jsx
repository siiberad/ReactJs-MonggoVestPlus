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
    
    constructor(props){
        super(props);
        const { match: { params } } = this.props;
        this.state = {
            productparams:{
                group:params.group,
                order:params.order,
                arah:params.arah,
                nomorhalaman:params.nomorhalaman
                 }
        }    
    }
    componentDidMount(){
        
        console.log("props", this.state);

    }
    componentWillReceiveProps(productparams){
        if(this.props.productparams != productparams){
            this.setState({productparams:productparams.match.params})
            console.log("tes", productparams)
        }
       }
    render(){
        return(
            <div>
               <AppNavbar/> <br/><br/><br/>
               <Table borderless  >
                
                <tr >
                    <td >
                    <GroupingDropDown product={this.state.productparams}/>
                    </td>
                    
                    <td >
                    <SortingDropDown  sorting={this.state.productparams}/>
                    </td>
                    
                </tr>
                
                
               </Table>
               
                <h2 className="text-home" md="12">DAFTAR INSTRUMEN INVESTASI</h2>
                <AppCardAll params={this.state.productparams}/>
                {/* <CardPagination/> */}
                
                <AppFooter/>
            </div>
        )
    }
}

export default AllProductPage;