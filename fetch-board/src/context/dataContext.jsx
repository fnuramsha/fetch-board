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

const getPostImage = (index) => {
  const images = [
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://img.freepik.com/free-photo/woman-working-from-home-laptop_53876-132032.jpg?semt=ais_hybrid",
    "https://sm.pcmag.com/t/pcmag_au/news/a/asus-websi/asus-website-lists-laptop-with-intels-first-dedicated-graphi_r4yj.1200.jpg",
    "https://freerangestock.com/sample/167975/laptop-with-blue-website-homepage-on-the-screen.jpg",
    "https://cdn.create.vista.com/api/media/small/448994714/stock-photo-unrecognizable-man-working-home",
    "https://burst.shopifycdn.com/photos/designer-picking-colors-for-website.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_640.jpg",
    "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?cs=srgb&dl=pexels-andrew-2312369.jpg&fm=jpg",
  ];

  return images[index];
};

const getTodoImage = (index) => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg",
    "https://media.istockphoto.com/id/2162617977/photo/2025-new-year-resolutions-on-notepad-with-coffee-and-laptop.jpg?s=612x612&w=0&k=20&c=3FZ9R7E6fuP11QpzhGUT4TPvvrNqvwgJXwYOBq-sDVw=",
    "https://cdn.create.vista.com/api/media/small/273401880/stock-photo-top-view-100-days-check-list-stationery-laptop-smartphone-wooden",
    "https://media.istockphoto.com/id/1199308486/photo/flatlay-with-hands-typing-on-a-keyboard-of-laptop-white-desk.jpg?s=612x612&w=0&k=20&c=v5S89-I3kL-1AR1HmvbrGyGUKgVeWxFpszdRziIc9hE=",
    "https://media.istockphoto.com/id/915319208/photo/shopping-list.jpg?s=612x612&w=0&k=20&c=udjKS7pK2RXJUE6rn90ya57VHJS8VOTAhXmsGeiy9wA=",
    "https://img.freepik.com/premium-photo/efficient-organization-writing-todo-list-notebook_390739-724.jpg?semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/list-business-schedule-motivational-inspirational-quotes-words-typography-top-view-lettering_21336-6669.jpg",
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
  searchField: "",
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
    case "SET_SEARCH_FIELD":
      return {
        ...state,
        searchField: payload,
      };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayData = () => {
    console.log("I am state.posts", state?.posts);

    const filteredPosts = state?.posts?.filter((post) =>
      post.title.toLowerCase().includes(state.searchField)
    );

    const filteredToDos = state?.toDos?.filter((todo) =>
      todo.todo.toLowerCase().includes(state.searchField)
    );

    if (state.selectedResource === "Posts") {
      return (
        <>
          <Row>
            {filteredPosts?.map((post, index) => (
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
            {filteredToDos?.map((todo, index) => (
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

  const searchData = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    dispatch({ type: "SET_SEARCH_FIELD", payload: searchQuery });
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
    searchData,
    searchField: state.searchField,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
