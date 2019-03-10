// import React from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import '../assets/css/table.css'
// import axios from 'axios'
// import GetPagination from './GetPagination';


// class CardPagination extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       pages: [],
//       makanan:''

      
//     }
//   }
//   previousPage = () => {
//     if (this.state.currentPage !== 1)
//       this.setState((prevState) => ({ currentPage: (prevState.currentPage - 1) }))
//   }
//   nextPage = () => {
//     if (this.state.currentPage + 1 < this.state.githubData.lenght)
//       this.setState((prevState) => ({ currentPage: (prevState.currentPage + 1) }))
//   }
//   componentDidMount() {
//     axios.get("https://mgvplus.herokuapp.com/pagination/conditionalPagination?groupedBy=0&orderBy=productId&direction=DESC&page=0&size=6")
//       .then(response => {
//         const currentPage = response.data.pageable.pageNumber;
//         const PageCount = response.data.totalPages;
//         const direction = response.data.first;
//         var halaman = []
//         for (var i = 0; i < PageCount; i++) {
//           halaman.push({
//             nomor: i,
//             sort: `${direction}`,

//           });
//         }
//         console.log("sayurkol", halaman)
//         // halaman.map(page => ({
//         //   number: `${page.nomor}`,
//         //   sortingBy: `${page.sort}`
//         // }))
//         // this.setState({makanan:halaman})
//       }
//       )


//   }


//   render() {
//     let getPage = this.state.pages.map(page => {
//       return (
//         <PaginationItem>
//           <GetPagination key={page.number} page={page} />
//         </PaginationItem>
//       )
//     })


//     return (
//       <Pagination aria-label="Page navigation example">
//         <PaginationItem disabled>
//           <PaginationLink first href="#" />
//         </PaginationItem>
//         <PaginationItem disabled>
//           <PaginationLink previous href="#" />
//         </PaginationItem>
//         {getPage}
//         <PaginationItem>
//           <PaginationLink next href="#" />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink last href="#" />
//         </PaginationItem>
//       </Pagination>


//     )
//   }



// }

// export default CardPagination

