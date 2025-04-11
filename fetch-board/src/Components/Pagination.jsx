import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MyContext } from "../context/dataContext";

const Pagination = () => {
  const { dispatch, currentPage } = useContext(MyContext);

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    console.log("Pagination", data.selected + 1);
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage });
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakAriaLabels={"..."}
        pageCount={10}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
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
        forcePage={currentPage - 1}
      />
    </div>
  );
};
export default Pagination;
