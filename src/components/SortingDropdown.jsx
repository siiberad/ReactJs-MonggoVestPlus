import React from 'react';
import{ Col, Button, Form, FormGroup, Label, Input, Container}from 'reactstrap';
import options from './ProvinceName'
import Select from 'react-select';
import axios from 'axios';



class SortingDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.onSort=this.onSort.bind(this);
    this.state = {
        orderBy: '',
        direction:''        
    }
}


  onSort (selectedOption) {
    this.setState({ selectedOption });
  }

  onSubmit(e) {
    e.preventDefault();
    const serverport = {
        ProvinceModel: parseInt(this.state.selectedOption.value,10),
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
         <Col sm={{size:5,offset:3}} >      
          <Select
            
              value={selectedOption}
              onChange={this.onSort}
              options={
                [
                  {
                    direction: "DESC",
                    orderBy: "productId",
                    label: "Terbaru"
                   },
                  {
                    direction: "DESC",
                    orderBy: "hargaModal",
                    label: "Harga dari tinggi ke rendah"
                   },
                   {
                    direction: "ASC",
                    orderBy: "hargaModal",
                    label: "Harga dari rendah ke tinggi"
                   }
                  ]
                
              }
              placeholder=""
              onClick={this.onSubmit}
            />
            </Col>
          
        );
        

      }  
}
export default SortingDropDown ;

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
