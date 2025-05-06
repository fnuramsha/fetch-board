import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MyContext } from "../context/dataContext";
import Pagination from "./Pagination";
import useGetPosts from "../hooks/useGetPosts";
import useGetToDos from "../hooks/useGetToDos";
import SearchAndDisplayPosts from "./SearchAndDisplayPosts";
import SearchAndDisplayToDos from "./SearchAndDisplayToDos";

const options = [
  {
    label: "Resources",
  },
  {
    label: "Posts",
  },
  {
    label: "ToDos",
  },
];

const Home = () => {
  const { dispatch, selectedResource, searchField } = useContext(MyContext);

  useGetPosts(); //custom hook
  useGetToDos();

  const searchData = (e) => {
    const searchField = e.target.value;
    dispatch({ type: "SET_SEARCH_FIELD", payload: searchField });
  };

  const displayData = () => {
    if (selectedResource === "Posts") {
      return <SearchAndDisplayPosts />;
    } else if (selectedResource === "ToDos") {
      return <SearchAndDisplayToDos />;
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="vh-100">
            <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
              <div className="d-flex gap-2">
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="secondary"
                  title={selectedResource || "Resources"}
                >
                  {options.map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => {
                        dispatch({ type: "SET_OPTION", payload: option.label });
                      }}
                    >
                      {" "}
                      {option.label}{" "}
                    </Dropdown.Item>
                  ))}{" "}
                </DropdownButton>

                <div className="input-group">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Type to search..."
                      value={searchField}
                      onChange={searchData}
                    />
                    <button className="btn btn-outline-secondary" type="button">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-12 main-content p-6">
                <div className="border border-6 p-3 mt-3">
                  <h3 className="text-decoration-underline">Posts and ToDos</h3>

                  <div>{displayData()}</div>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
