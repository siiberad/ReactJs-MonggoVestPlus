import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, NavItem,
    Card, CardBody, CardImg,CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import FilterResults from 'react-filter-search';
import '../assets/scss/_searchstyle.scss';
import axios from 'axios';
import Search from 'react-search-input';
// import Select from 'react-select';
import Back from '../helpers/Back';
// import Suggestions from '../helpers/Suggestions';
// import option from './Productname';
// import SearchResults from '../searchpage/fungsi';

class AppSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // error: false,
            hasil:[],
            productName:'',
            Redirect: false,
            keyword:''
            // selectedOption:null
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.onProductName = this.onProductName.bind(this);   yg bisa
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }
    
    
    setRedirect = () => {
        this.setState({
            Redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.Redirect) {
            return <Redirect to={`/results/${this.state.keyword}`}/>
        }
    }

    onProductName = (text) => {
        this.setState({
            keyword: text
        })
    }


    //---------------------------------------------------------------------------------------------------------------------------

    // componentWillMount() {
    //     let currentComponent = this;
    //     axios.get(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30`)
    //     .then(res => {
    //         this.setState({productName: res.data.get.id.productName})
    //         console.log('asek',res);
    //         console.log('ahoy',res.data);
    //         console.log('waw', res.data.content)
    //         console.log('asiyap', this.state.productName)

    //         currentComponent.setState({
    //             hasil: res.data.productName
    //         })
    //         console.log('bismillah', this.state.productName)
    //     })
    //     .catch((error) => {
    //         console.error('haduhh',error);
    //     })
    // }


//----------------------------------------------------------------------------------------------------------
  

  render() {
    return (
        <div className="box-size-search">
            <Container className="search-all">
            {/* letak map function */}
                <Form className="search-form">
         
                    <FormGroup>
                        <Label className="label-search" for="search-web" hidden>Search</Label>
                            <Search className="input-search"
                            type="search"  
                            onChange={this.onProductName}
                            // options={option}
                            // ref={Input => this.search = Input}
                            // onChange={this.handleInputChange} 
                            name="search" 
                            id="search-web" 
                            placeholder="Search" 
                            />
                            {this.renderRedirect()}
                            <button id="button-search" onClick={this.setRedirect}>Cari</button>
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

export default AppSearch;




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