import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Link} from 'react-router-dom';
import '../assets/css/table.css'
import axios from 'axios'
import GetPagination from './GetPagination';


class CardPagination extends React.Component {
  constructor() {
    super()
    this.state = {
        paging:[]
      }
    }
    previousPage = () => {
      if (this.state.currentPage !== 1)
        this.setState((prevState) => ({currentPage: (prevState.currentPage - 1)}))
    }
    nextPage = () => {
      if (this.state.currentPage + 1 < this.state.githubData.lenght)
        this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}))
    }
    componentDidMount(){
      axios.get("http://localhost:8080/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=ASC&page=0&size=20")
      .then(response =>
        response.data.map(halaman => ({
          id: `${halaman.content.productId}` ,
          page: `${halaman.pageable.productName}` ,
          direction: `${halaman.pageable.first}`
       }))
     )
     .then(products => {
         this.setState({
           products,
           isLoading: false
         });
       })
       .catch(error => this.setState({ error, isLoading: false }));
         
     }

    
  render (){
    let getPage = this.state.paging.map(halaman=> {
      return (
        <PaginationItem active>
          <GetPagination key={halaman.id}  halaman={halaman} />
        </PaginationItem>
      )
    })

    return(
      <div>

             <table align="center">
            <th></th>
              <th>
              <Pagination aria-label="Page navigation example" >
              <PaginationItem disabled>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationLink>
                1
              </PaginationLink>

              <PaginationItem>
              {/* </PaginationItem>
              {getPage}
              <PaginationItem> */}
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
                 </th>
            </table>
              <th></th>
          </div>
    )
  }
  
         
  
  }

export default CardPagination

