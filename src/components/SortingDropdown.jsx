// import React from 'react';
// import{ Col, Button, Form, FormGroup, Label, Input, Container}from 'reactstrap';

// import Select from 'react-select';
// import axios from 'axios';
// import {Link} from 'react-router-dom';


// const options =

//   [
//     { id: 1,
//       direction: "DESC",
//       orderBy: "productId",
//       label: "Terbaru"
//      },
//     { id: 2,
//       direction: "DESC",
//       orderBy: "hargaModal",
//       label: "Harga dari tinggi ke rendah"
//      },
//      { id: 3,
//       direction: "ASC",
//       orderBy: "hargaModal",
//       label: "Harga dari rendah ke tinggi"
//      }
//     ]

// class SortingDropDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onSort=this.onSort.bind(this);
//     this.state = {
//         orderBy: '',
//         direction:''        
//     }
// }


//   onSort (selectedOption) {
//     this.setState({ selectedOption });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const serverport = {
//         ProvinceModel: parseInt(this.state.selectedOption.value,10),
//     }
//     axios
//       .get('', serverport)
//       .then(res => console.log(res.data));

//       this.setState({ 
//         orderBy: `$(options.)`,
//         direction:''        
        
//       });
// }


//       render(){
//         const { selectedOption } = this.state;
        

//         return(
//          <Col sm={{size:5,offset:3}} >
         
        
//           <Select
            
//               value={selectedOption}
//               onChange={this.onSort}
//               options={options}
//               placeholder=""
//               onClick={this.onSubmit}
//               href= {`monggovestplus.herokuapp.com/allproduct/0/${this.state.orderBy}/${this.state.direction}/0`}
//             >
            
//             </Select>
              
//             </Col>
          
//         );
        

//       }  
// }
// export default SortingDropDown ;


import {
  
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Container,
  Row,
  Col,
  Input,
  UncontrolledDropdown
} from 'reactstrap'
import React from 'react';
import {Link} from 'react-router-dom';

class SortingDropdown extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dd1: false,
      urutkan:[]
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  
  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }
  
  render() {
    const sorting = this.props.sorting  
    
    return (      
      <div>
        <Dropdown color="nav">
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle className="nav-link" caret>
            Urutkan Berdasarkan
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem ><Link to={{pathname : `/allproduct/${sorting.group}/productId/DESC/${sorting.nomorhalaman}`}} > Terbaru</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/${sorting.group}/hargaModal/ASC/${sorting.nomorhalaman}`}} > Harga Rendah ke Tinggi</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/${sorting.group}/hargaModal/DESC/${sorting.nomorhalaman}`}} > Harga Tinggi ke Rendah</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </Dropdown>
      </div>
    );
  }
}

export default SortingDropdown

