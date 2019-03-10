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




class GroupingDropDown extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      dd1: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  
  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }
  

      render(){
        // const { selectedOption } = this.state;
        const product = this.props.product
        

        return(
          
          <Col sm={{size:7,offset:4}}>  
          {/* <Select
              value={selectedOption}
              onChange={this.onProvinceName}
              options={options}
              placeholder="Pilih Provinsi "
              onClick={this.onSubmit}
            /> */}
        <Dropdown color="nav">         
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle className="nav-link" caret>
            Filter berdasarkan provinsi
          </DropdownToggle>
          <DropdownMenu  modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: 100,
                  },
                };
              },
            },
          }}>
            <DropdownItem ><Link to={{pathname : `/allproduct/0/${product.order}/${product.arah}/0`}} >Semua Provinsi</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/1/${product.order}/${product.arah}/0`}} >Aceh</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/2/${product.order}/${product.arah}/0`}} >Sumatera Utara</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/3/${product.order}/${product.arah}/0`}} >Sumatera Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/4/${product.order}/${product.arah}/0`}} >Riau</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/5/${product.order}/${product.arah}/0`}} >Kepulauan Riau</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/6/${product.order}/${product.arah}/0`}} >Jambi</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/7/${product.order}/${product.arah}/0`}} >Bengkulu</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/8/${product.order}/${product.arah}/0`}} >Sumatera Selatan</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/9/${product.order}/${product.arah}/0`}} >Kepulauan Bangka Belitung</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/10/${product.order}/${product.arah}/0`}} >Lampung</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/11/${product.order}/${product.arah}/0`}} >Banten</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/12/${product.order}/${product.arah}/0`}} >Jawa Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/13/${product.order}/${product.arah}/0`}} >DKI Jakarta</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/14/${product.order}/${product.arah}/0`}} >Jawa Tengah</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/15/${product.order}/${product.arah}/0`}} >DI Yogyakarta</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/16/${product.order}/${product.arah}/0`}} >Jawa Timur</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/17/${product.order}/${product.arah}/0`}} >Bali</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/18/${product.order}/${product.arah}/0`}} >Nusa Tenggara Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/19/${product.order}/${product.arah}/0`}} >Nusa Tenggara Timur</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/20/${product.order}/${product.arah}/0`}} >Kalimantan Utara</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/21/${product.order}/${product.arah}/0`}} >Kalimantan Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/22/${product.order}/${product.arah}/0`}} >Kalimantan Tengah</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/23/${product.order}/${product.arah}/0`}} >Kalimantan Selatan</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/24/${product.order}/${product.arah}/0`}} >Kalimantan Timur</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/25/${product.order}/${product.arah}/0`}} >Gorontalo</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/26/${product.order}/${product.arah}/0`}} >Sulawesi Utara</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/27/${product.order}/${product.arah}/0`}} >Sulawesi Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/28/${product.order}/${product.arah}/0`}} >Sulawesi Tengah</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/29/${product.order}/${product.arah}/0`}} >Sulawesi Selatan</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/30/${product.order}/${product.arah}/0`}} >Sulawesi Tenggara</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/31/${product.order}/${product.arah}/0`}} >Maluku Utara</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/32/${product.order}/${product.arah}/0`}} >Maluku</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/33/${product.order}/${product.arah}/0`}} >Papua Barat</Link></DropdownItem>
            <DropdownItem><Link to={{pathname : `/allproduct/34/${product.order}/${product.arah}/0`}} >Papua</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </Dropdown>
          
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
