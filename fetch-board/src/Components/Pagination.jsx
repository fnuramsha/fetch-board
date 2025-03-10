import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MyContext } from "../context/dataContext";

const Pagination = () => {
  const { paginatedItems } = useContext(MyContext);

  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakAriaLabels={"..."}
        pageCount={10}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};
export default Pagination;
