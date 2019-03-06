import React from 'react';
import{ Col, Row, Button, Form, FormGroup, Label, Input, Container}from 'reactstrap';
import options from './ProvinceName'
import Select from 'react-select';
import axios from 'axios';



class GroupingDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.onProvinceName=this.onProvinceName.bind(this);
    this.state = {
        bankModel: '',        
    }
}


  onProvinceName (selectedOption) {
    this.setState({ selectedOption });
  }

  onSubmit(e) {
    e.preventDefault();
    const serverport = {
        ProvinceModel: parseInt(this.state.selectedOption.value, 10),
    }
    axios
      .get('', serverport)
      .then(res => console.log(res.data));

      this.setState({       
        bankModel: '',
      });
}


      render(){
        const { selectedOption } = this.state;
        

        return(
          
          <Col sm={{size:5,offset:4}}>  
          <Select
              value={selectedOption}
              onChange={this.onProvinceName}
              options={options}
              placeholder="Pilih Provinsi "
              onClick={this.onSubmit}
            />
            </Col>   
           
          
        );
        

      }  
}
export default GroupingDropDown ;

  // constructor(props){
//   super();
//   this.state = {
//     tech: 'select'
//   };
// }


  // toggle() {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // }
