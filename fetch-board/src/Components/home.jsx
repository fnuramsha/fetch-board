import { useContext, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MyContext } from "../context/dataContext";
import Pagination from "./Pagination";
import GetPost from "./getPost";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import GetToDos from "./getToDos";

const options = [
  { label: "Resources", value: 0 },
  { label: "Posts", value: 1 },
  { label: "ToDos", value: 2 },
];

const Home = () => {
  const {
    state,
    dispatch,
    searchField,
    searchData,
    getPostImage,
    getTodoImage,
    posts,
    toDos,
    selectedResource,
  } = useContext(MyContext);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     console.log("I am current page in useEffect", currentPage);
  //     const updatedPost = await getPosts(currentPage);
  //     if (updatedPost && updatedPost.length > 0) {
  //       dispatch({ type: "SET_POSTS", payload: updatedPost });
  //     }
  //   };
  //   fetchPosts();
  // }, [currentPage, dispatch]);

  // useEffect(() => {
  //   const fetchToDos = async () => {
  //     const updatedToDos = await getToDos(currentPage);
  //     if (updatedToDos && updatedToDos.length > 0) {
  //       dispatch({ type: "SET_TODOS", payload: updatedToDos });
  //     }
  //   };
  //   fetchToDos();
  // }, [currentPage]);
  // console.log("I am searchField", searchField);

  const displayData = () => {
    const filteredPosts = posts?.filter((post) =>
      post.title.toLowerCase().includes(searchField)
    );

    const filteredToDos = toDos?.filter((todo) =>
      todo.todo.toLowerCase().includes(searchField)
    );

    if (selectedResource === "Posts") {
      return (
        <>
          <Row>
            {filteredPosts.map((post, index) => (
              <Col sm={3} key={index}>
                <div className="holder">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      alt="Card image cap"
                      src={getPostImage(index)}
                      style={{ height: "200px" }}
                    />
                    <Card.Body style={{ height: "200px" }}>
                      <Card.Title className="fw-bold text-center">
                        Post:{post.id}
                      </Card.Title>
                      <Card.Text>
                        Title: {post.title} Views: {post.views}
                      </Card.Text>
                      <Link to={`/post/${post.id}`} className="link-dark">
                        Post Details
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </>
      );
    } else if (selectedResource === "ToDos") {
      return (
        <>
          <Row>
            {filteredToDos.map((todo, index) => (
              <Col sm={3} key={index}>
                <div className="holder">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={getTodoImage(index)}
                      style={{ height: "200px" }}
                    />
                    <Card.Body style={{ height: "200px" }}>
                      <Card.Title className="fw-bold text-center">
                        ToDo:{todo.id}
                      </Card.Title>
                      <Card.Text>Title: {todo.todo}</Card.Text>
                      <Link to={`/todo/${todo.id}`} className="link-dark">
                        ToDo Details
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </>
      );
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

                  <div>
                    {" "}
                    <GetPost />
                  </div>
                  <div>
                    {" "}
                    <GetToDos />
                  </div>
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
