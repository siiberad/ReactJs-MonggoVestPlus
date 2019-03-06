import React, { Component, Pagination, PaginationItem, PaginationLink} from 'react';
import {Link} from 'react-router-dom';

class GetPagination extends Component {
  constructor(props) {
    super(props);
  }

  
  render () {
    let { page, direction,groupedBy,orderBy}  = this.props.halaman;
    return (
        
                <PaginationLink>
                <Link to={`/allproduct/${groupedBy}/${orderBy}/${direction}/${page}`}>
                  {page}
                </Link>
                </PaginationLink>
              
      
    )
  }
}


export default GetPagination

