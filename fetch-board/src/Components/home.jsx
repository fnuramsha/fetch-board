import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Placeholder } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/dataContext";

const Home = () => {
  const { getPosts, initialPostVal, setPostVal } = useContext(dataContext);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPosts(initialPostVal);
      setPostVal(postData);
    };
    fetchData();
  }, [getPosts, initialPostVal, setPostVal]);

  return (
    <div className="container-fluid vh-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
        <DropdownButton
          id="dropdown-basic-button"
          title="Resources"
          variant="secondary"
        >
          <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
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
              </div>
            </div>
            {/* Pagination example */}
            {/* <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
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
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav> */}

            {/* Another pagination */}

            <nav aria-label="Page navigation example">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
