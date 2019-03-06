import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

import '../assets/css/stylenav.css';

class AllProductButton extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render(){
        return(
          <div align="center" >
            <Button color="danger" onClick={this.toggle}><Link to="/allproduct">TAMPILKAN LEBIH BANYAK</Link>{this.props.buttonLabel}</Button>
            
          </div>
          
        );
        

      }  
}
export default AllProductButton;
