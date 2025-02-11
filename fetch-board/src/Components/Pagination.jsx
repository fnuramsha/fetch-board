import { useContext, useState } from "react";
import { MyContext } from "../context/dataContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPosts, totalTodos } =
    useContext(MyContext);

  const handlePrev = () => {
    console.log("Pagination is working");
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    console.log("I am next button and logging totalPosts", totalPosts);

    setCurrentPage((prev) => Math.min(prev + 1, totalPosts));
  };
  const handlePageClick = (pageNumber) => {
    console.log("check pageNumber", pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only"></span>
          </a>
        </li>

        {Array.from({ length: totalPosts }, (_, index) => (
          <li key={index} className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => handlePageClick(index + 1)}
            >
              {" "}
              {index + 1}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={handleNext}
            disabled={currentPage === totalPosts}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

// This code is for reference. Another way of implementing Pagination

//   return (
//     <div className="pagination">
//       <button onClick={handlePrev} disabled={currentPage === 1}>
//         Prev
//       </button>
//       {Array.from({ length: totalPosts }, (_, index) => (
//         <button key={index} onClick={() => handlePageClick(index + 1)}>
//           {index + 1}
//         </button>
//       ))}

//       <button onClick={handleNext} disabled={currentPage === totalPosts}>
//         Next
//       </button>
//     </div>
//   );
// };
// export default Pagination;
