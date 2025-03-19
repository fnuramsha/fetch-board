import { useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MyContext } from "../context/dataContext";
import Pagination from "./Pagination";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  useEffect(() => {
    const fetchToDos = async () => {
      const updatedToDos = await getToDos(currentPage);
      if (updatedToDos && updatedToDos.length > 0) {
        dispatch({ type: "SET_TODOS", payload: updatedToDos });
      }
    };
    fetchToDos();
  }, [currentPage]);

  return (
    <Container fluid="md" className="bg-dark-subtle">
      <Row className="justify-content-md-center">
        <Col>
          <div className="vh-100">
            <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
              {/* React bootstrap dropdown */}
              {/* <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title={state?.value || "Resources"}
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
                ))}
              </DropdownButton> */}

              {/* for border */}

              <div className="d-flex gap-2">
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="secondary"
                  title={state?.value || "Resources"}
                >
                  {options.map((option, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => {
                        dispatch({
                          type: "SET_OPTION",
                          payload: option.label,
                        });
                      }}
                    >
                      {" "}
                      {option.label}{" "}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>

                <div className="input-group">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="submit">
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
