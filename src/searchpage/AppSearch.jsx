// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, Container, Link, Card, CardBody, CardImg,CardTitle, CardSubtitle, CardText} from 'reactstrap';
// import { withLastLocation, LastLocationProvider } from 'react-router-last-location';
// import FilterResults from 'react-filter-search';
// import '../assets/scss/_searchstyle.scss';
// import axios from 'axios';
// import AppResults from './AppResults';

// class AppSearch extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             hasil:[],
//             query:''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     // componentWillMount(){
//     //     axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
//     //     .then(res => {
//     //         const messages = hasil.data
//     //         console.log('isi willMount', this.state.messages)
//     //         this.setState({
//     //             messages:[...messages.content]
//     //         })
//     //     })
        
//     // };

//     componentDidMount() {
//         axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
//         .then (res => {
//             this.setState({hasil: res.data.content})
//             console.log("uh shi up", this.state.hasil)
//         })
//     };

//     componentWillMount(){
//         axios.get('https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=&orderBy=productId&page=0&size=30')
//         .then (res => {
//             this.setState({hasil: res.data.content})
//             console.log("nanik", this.state.hasil)
//         })
//     };

//     handleChange = event => {
//         const { value } = event.target;
//         this.setState({ value });
//         // console.log('ini value', this.state.value)
//     };

    

//   render() {
//         const { hasil, value } = this.state;
//     return (
//         <div className="box-size-search">
//             <Container className="search-all">
//             {/* letak map function */}
//                 <Form className="search-form">
         
//                     <FormGroup>
//                         <Label className="label-search" for="search-web" hidden>Search</Label>
//                             <Input className="input-search"
//                             type="search" 
//                             value={value} onChange={this.handleChange} 
//                             name="search" 
//                             id="search-web" 
//                             placeholder="Search" 
//                             />
//                             {/* <AppResults 
//                                 value={value}
//                                 hasil={hasil}
//                                 renderResults={results => (
//                                     <div>
//                                         {results.map(el => (
//                                             <div>
//                                                 <span>{el.productName}</span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             /> */}
                                
//                   </FormGroup>
//                     <div className="div-kembli">
//                         <p className="p-kembali">Kembali</p>
//                     </div>
//                 </Form>
//             </Container>
//         </div>
//         )
//     }
// }

// export default AppSearch;



// {/* <div>
          

                
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