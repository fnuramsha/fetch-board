import { useContext, useState } from "react";
import { MyContext } from "../context/dataContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPosts } = useContext(MyContext);

  const handlePrev = () => {
    console.log("Pagination is working");
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    console.log("I am next button and logging totalPosts", totalPosts);

    setCurrentPage((prev) => Math.min(prev + 1, totalPosts));
  };
  const handlePageClick = (pageNumber) => {
    console.log("hello");
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev}>Prev</button>
      {Array.from({ length: totalPosts }, (_, index) => (
        <button key={index} onClick={() => handlePageClick}>
          {index + 1}
        </button>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Pagination;

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         <li className="page-item">
//           <a
//             className="page-link"
//             href="#"
//             aria-label="Previous"
//             onClick={handlePrev}
//           >
//             <span aria-hidden="true">&laquo;</span>
//             <span className="sr-only"></span>
//           </a>
//         </li>
//         {/* <li className="page-item">
//           <a className="page-link" href="#">
//             {Array.from({ length: totalPosts }, (_, index) => (
//               <button key={index} onClick={() => handlePageClick(index + 1)}>
//                 {index + 1}
//               </button>
//             ))}
//           </a>
//         </li> */}

//         <li className="page-item">
//           <a className="page-link" href="#">
//             1
//           </a>
//         </li>
//         <li className="page-item">
//           <a className="page-link" href="#">
//             2
//           </a>
//         </li>
//         <li className="page-item">
//           <a className="page-link" href="#">
//             3
//           </a>
//         </li>
//         <li className="page-item">
//           <a
//             className="page-link"
//             href="#"
//             aria-label="Next"
//             onClick={handleNext}
//           >
//             <span aria-hidden="true">&raquo;</span>
//             <span className="sr-only"></span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
