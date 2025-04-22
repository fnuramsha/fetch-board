import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import axios from "axios";
import { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";

const GetPost = () => {
  const {
    currentPage,
    dispatch,
    getTodoImage,
    getPostImage,
    selectedResource,
    posts,
    toDos,
    searchField,
  } = useContext(MyContext);

  const getPosts = async (currentPage) => {
    const posts = await axios.get(
      `https://dummyjson.com/posts?limit=8&skip=${(currentPage - 1) * 8}`
    );
    console.log("I am getPosts", posts);
    return posts.data.posts;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("I am current page in useEffect", currentPage);
      const updatedPost = await getPosts(currentPage);
      if (updatedPost && updatedPost.length > 0) {
        dispatch({ type: "SET_POSTS", payload: updatedPost });
      }
    };
    fetchPosts();
  }, [currentPage, dispatch]);

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

export default GetPost;
