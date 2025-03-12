import { useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MyContext } from "../context/dataContext";
import Pagination from "./Pagination";

const options = [
  { label: "Resources", value: 0 },
  { label: "Posts", value: 1 },
  { label: "ToDos", value: 2 },
];

const Home = () => {
  const {
    getPosts,
    getToDos,
    displayData,
    state,
    dispatch,
    currentPage,
    // selectedResource,
  } = useContext(MyContext);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("I am current page in useEffect", currentPage);
      const updatedPost = await getPosts(currentPage);
      if (updatedPost && updatedPost.length > 0) {
        dispatch({ type: "SET_POSTS", payload: updatedPost });
      }
    };
    fetchPosts();
  }, [currentPage]);

  // useEffect(() => {
  //   if (selectedResource === "Posts") {
  //     const fetchPosts = async () => {
  //       const updatedPosts = await getPosts(currentPage);
  //       if (updatedPosts && updatedPosts.length > 0) {
  //         dispatch({ type: "SET_POSTS", payload: updatedPosts });
  //       }
  //     };
  //     fetchPosts();
  //   }
  // }, [currentPage, selectedResource]); // Added selectedResource

  useEffect(() => {
    const fetchToDos = async () => {
      const updatedToDos = await getToDos();
      if (updatedToDos && updatedToDos.length > 0) {
        dispatch({ type: "SET_TODOS", payload: updatedToDos });
      }
    };
    fetchToDos();
  }, []);

  return (
    <div className="container-fluid vh-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
        {/* React bootstrap dropdown */}

        <DropdownButton
          id="dropdown-basic-button"
          variant="secondary"
          title={state?.value || "Resources"}
        >
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              // value={selectedPage}
              // onClick={() => {
              //   setValue(option.label);
              //   dispatch({ type: "SET_OPTION", payload: option.label });
              // setSelectedPage(option.label);
              //   setCurrentPage(1); // Reset pagination when dropdown changes
              // }}
              onClick={() => {
                dispatch({ type: "SET_OPTION", payload: option.label });
              }}
            >
              {" "}
              {option.label}{" "}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        {/* for border */}
        <div className="col-10 main-content p-4">
          <div className="border border-3 p-3 mt-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                data-mdb-ripple-init
              >
                search
              </button>
            </div>
            <div className="col-12 main-content p-6">
              <div className="border border-6 p-3 mt-3">
                <h3 className="text-decoration-underline">Posts and ToDos</h3>
                <div>{displayData()}</div>
              </div>
            </div>

            {/* Pagination */}

            {/* <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only"></span>
                  </a>
                </li>
              </ul>
            </nav> */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
