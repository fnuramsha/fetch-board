import { useReducer, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import postImage from "../Components/Images/posts.jpeg";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import todoImage from "../Components/Images/todo.jpg";

const MyContext = createContext();

const getCardImage = (index) => {
  const images = [
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/woman-working-from-home-laptop_53876-132032.jpg?semt=ais_hybrid",
  ];

  return images[index];
};

const getPosts = async (currentPage) => {
  const posts = await axios.get(
    `https://dummyjson.com/posts?limit=8&skip=${(currentPage - 1) * 8}`
  );
  return posts.data.posts;
};

const getToDos = async (currentPage) => {
  const toDos = await axios.get(
    `https://dummyjson.com/todos?limit=8&skip=${(currentPage - 1) * 8}`
  );
  return toDos.data.todos;
};

const getSinglePosts = async (id) => {
  const singlePost = await axios.get(`https://dummyjson.com/posts/${id}`);
  console.log("I am single Post", singlePost.data);
  return singlePost.data;
};

const getSingleToDos = async (id) => {
  const singleToDos = await axios.get(`https://dummyjson.com/todos/${id}`);
  console.log("ToDo id and Single ToDos", id, singleToDos.data);
  return singleToDos.data;
};

const initialState = {
  selectedResource: "",
  posts: [],
  toDos: [],
  singlePost: [],
  singleToDos: [],
  paginatedItems: [],
  currentPage: 1,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_OPTION":
      return {
        ...state,
        selectedResource: payload,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: payload,
      };
    case "SET_TODOS":
      return {
        ...state,
        toDos: payload,
      };
    case "SET_SINGLEPOSTS":
      return {
        ...state,
        singlePost: payload,
      };
    case "SET_SINGLETODOS":
      return {
        ...state,
        singleToDos: payload,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayData = () => {
    if (state.selectedResource === "Posts") {
      return (
        <>
          <Row>
            {state.posts?.map((post, index) => (
              <Col sm={3} key={index}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={getCardImage(index)} />
                    <Card.Body>
                      <Card.Title className="fw-bold text-center">
                        Post:{post.id}
                      </Card.Title>
                      <Card.Text>
                        Title: {post.title} Views: {post.views}
                      </Card.Text>
                      <Link to={`/post/${post.id}`}>Post Details</Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </>
      );
    } else if (state.selectedResource === "ToDos") {
      return (
        <>
          <Row>
            {state.toDos?.map((todo, index) => (
              <Col sm={3} key={index}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={todoImage} />
                    <Card.Body>
                      <Card.Title className="fw-bold text-center">
                        ToDo:{todo.id}
                      </Card.Title>
                      <Card.Text>Title: {todo.todo}</Card.Text>
                      <Link to={`/todo/${todo.id}`}>ToDo Details</Link>
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

  const values = {
    getPosts,
    getToDos,
    displayData,
    dispatch,
    getSinglePosts,
    singlePost: state.singlePost,
    singleToDos: state.singleToDos,
    getSingleToDos,
    currentPage: state.currentPage,
    selectedResource: state.selectedResource,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
