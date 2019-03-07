import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, NavItem,
    Card, CardBody, CardImg,CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withLastLocation, LastLocationProvider } from 'react-router-last-location';
import FilterResults from 'react-filter-search';
import '../assets/scss/_searchstyle.scss';
import axios from 'axios';
// import SearchResults from '../searchpage/fungsi';

class AppSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasil:[],
            productName:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
        .then(res => {
            this.setState({hasil: res.data.content})
        })
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };
    


    componentDidMount() {
        axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
        .then (res => {
            const productName = res.data.productName;
            this.setState({hasil: res.data.content , productName})
            console.log("uh shi up", this.state.hasil)
        })
    };

    // onSubmit(e) {
    //     let productName = localStorage.getItem('PRODUCT_NAME')
    //     console.log(productName)
    // axios.post(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=${producName}&orderBy=productId&page=0&size=30`)
    // }

  render() {
   
    const { hasil } = this.state;
    console.log('nni korewa',hasil)
    return (
        <div className="box-size-search">
            <Container className="search-all">
            {/* letak map function */}
                <Form className="search-form">
         
                    <FormGroup>
                        <Label className="label-search" for="search-web" hidden>Search</Label>
                            <Input className="input-search"
                            type="search" 
                            value={hasil} 
                            onChange={this.handleChange} 
                            name="search" 
                            id="search-web" 
                            placeholder="Search" 
                            />
                            <hr/>
                            <div>
                                {/* <SearchResults
                                    value={value}
                                    hasil={hasil}
                                    renderResults={res => (
                                        <div style={{ marginTop: '16px' }}>
                                            {res.map(({ hasil }, i) =>(
                                                <div 
                                                    key={i}
                                                    style={{
                                                        backgroundColor: '#f7f7f7',
                                                        marginBottom: '8px',
                                                        borderRadius:'4px',
                                                        padding:'16px',
                                                        alignSelf:'start',
                                                        width:'100%'
                                                    }}
                                                    >
                                                    <span>{hasil.productName}</span>
                                                    <img src={hasil.productImage1} alt={hasil.productId}/>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                /> */}
                                {/* <pre>
                                    <code></code>
                                </pre> */}
                            </div>
                                
                  </FormGroup>
                    <div className="div-kembli">
                        <NavItem className="kembali-search">
                            <Link className='p-kembali' to='/homepage'>Kembali</Link>
                        </NavItem>
                    </div>
                </Form>
            </Container>
        </div>
        )
    }
}

export default AppSearch;



{/* <div>
          

                
     <Card>
                {this.state.hasil.map((jancuk, index) =>
       <CardBody>
         <CardTitle>{jancuk.productNamey}</CardTitle>
         <CardSubtitle>Card subtitle</CardSubtitle>
         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
       </CardBody>
         )}
     </Card>
    </div> */}