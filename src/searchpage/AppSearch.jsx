import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, NavItem,
    Card, CardBody, CardImg,CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import FilterResults from 'react-filter-search';
import '../assets/scss/_searchstyle.scss';
import axios from 'axios';
import Search from 'react-search-input';
import Select from 'react-select';
import Back from '../helpers/Back';
import Suggestions from '../helpers/Suggestions';
import option from './Productname';
// import SearchResults from '../searchpage/fungsi';

class AppSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            hasil:[],
            // productName:'',
            selectedOption:null
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.onProductName = this.onProductName.bind(this);   yg bisa
    }

    // onProductName (selectedOption) {
    //     this.setState({ selectedOption });   yang bisa
    // }

    componentWillMount() {
        let currentComponent = this;
        axios.get(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30`)
        .then(res => {
            console.log('asek',res);
            console.log('ahoy',res.data);
            console.log('asiyap', res.data.productName)

            currentComponent.setState({
                hasil: res.data.productName
            })
            console.log('bismillah', this.state.productName)
        })
        .catch((error) => {
            console.error('haduhh',error);
        })
    }





    // componentWillMount(){
    //     axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
    //     .then(res => {
    //         this.setState({hasil: res.data.content})
    //     })
    // }

    // handleChange = event => {
    //     const { value } = event.target;
    //     this.setState({ value });
    // };
    


    // componentDidMount() {
    //     axios.get(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=${this.state.productName}&orderBy=productId&page=0&size=30`)
    //     .then (res => {
    //         const hasil = res.data.content;
    //         // const productName = res.data.content;
    //         this.setState({hasil: res.data.content})
    //         this.setState({productName: res.data.productName})
    //         console.log("Anjing", this.state.hasil)
    //         console.log('jancux', this.state.productName)
    //     })
    // };




    // onProductName (selectedOption) {
    //     this.setState({ selectedOption });
    // }

    // componentDidMount(){
    //     axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
    //     .then(res => {
    //         const hasil = res.data;
    //         this.setState({ hasil });
    //         console.log('uh she up', this.state.hasil);
    //     })
    // };

    // getInfo = () => {
    //     axios.get(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=${this.state.productName}&orderBy=productId&page=0&size=30`)
    //     .then(({ data }) => {
    //         this.setState({
    //             hasil: data.data
    //         })
    //     })
    //     .catch(() => this.setState({ error: true }))
    //     console.log('asu', this.state.getInfo);
    // }

    // handleInputChange = () => {
    //     this.setState({
    //         productName: this.search.value
    //     }, () => {
    //         if (this.state.hasil && this.state.hasil.length > 1) {
    //                 // this.showDropdown()
    //             if (this.state.productName.length % 2 === 0) {
    //                 this.getInfo()
    //             }
    //         } else if (!this.state.hasil) {
    //             // this.hideDropdown()
    //         }
    //     })
    // }

    // onSubmit(e) {
    //     let productName = localStorage.getItem('PRODUCT_NAME')
    // axios.post(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=${productName}&orderBy=productId&page=0&size=30`)
    // .then(res => {
    //     this.setState({ selectedOption: this.state.productName })
    // })
    // };

  render() {
    //   const renderItem = this.state.hasil.map
//    console.log('name', this.state.productName);
//    console.log('kamfang', this.state.search);
//    console.log('hasil', this.state.getInfo)
    // const { hasil } = this.state;
    // console.log('nni korewa',hasil)
    // const { selectedOption } = this.state;
    return (
        <div className="box-size-search">
            <Container className="search-all">
            {/* letak map function */}
                <Form className="search-form">
         
                    <FormGroup>
                        <Label className="label-search" for="search-web" hidden>Search</Label>
                            <Search className="input-search"
                            type="search"  
                            // onChange={this.onProductName}  yang bisa
                            // options={option}
                            // ref={Input => this.search = Input}
                            // onChange={this.handleInputChange} 
                            name="search" 
                            id="search-web" 
                            placeholder="Search" 
                            />
                            <hr/>
                            {/* <Suggestions hasil={this.state.hasil} /> */}
                            {/* <p>{this.state.productName}</p> */}
                    </FormGroup>

                        <Back/>
                </Form>
            </Container>
        </div>
        )
    }
}

// export default AppSearch;




{/* <div>
          

                
//      <Card>
//                 {this.state.hasil.map((jancuk, index) =>
//        <CardBody>
//          <CardTitle>{jancuk.productNamey}</CardTitle>
//          <CardSubtitle>Card subtitle</CardSubtitle>
//          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//        </CardBody>
//          )}
//      </Card>
//     </div> */}