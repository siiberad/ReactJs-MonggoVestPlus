import React, { Component } from 'react';
import { CardBody, Card, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import AppFooter from '../components/AppFooter';
import AppNavbar from '../components/AppNavbar';
import AppSearch from './AppSearch';
import Axios from 'axios';
import '../assets/scss/_results.scss';
import { Link } from 'react-router-dom';

class AppResults extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                result:[]
            }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        // console.log('data su', params);
        Axios.get(`https://mgvplus.herokuapp.com/search/searchPagination?direction=ASC&name=${params.keyword}&orderBy=productId&page=0&size=10`)
        .then(res => {
            console.log(res);
            this.setState({result: res.data.content});
            this.setState({params: res.data.productName})
            // console.log('cuk', this.state.productName)
        })
    }
    render(){
        return(
            <div>
                <AppNavbar/>
                    <div className="result-page">
                        <imput 
                        type="text"
                        name="search"
                        value={this.onProductName}
                        ></imput>
                        <div>
                            {
                                this.state.result.map((lol, index) => 
                                <CardBody>
                                    <CardTitle>
                                    <Link to="/allproduct">
                                    {lol.productName}
                                    </Link>
                                    </CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
        )
                            }
                        </div>
                    </div>
                <AppFooter/>
            </div>
        )
    }
}

export default AppResults;