import { useReducer, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import postImage from "../Components/Images/posts.jpeg";

const MyContext = createContext();

const getPosts = async (currentPage) => {
  const posts = await axios.get(
    `https://dummyjson.com/posts?limit=5&skip=${(currentPage - 1) * 5}`
  );
  return posts.data.posts;
};

const getToDos = async (currentPage) => {
  const toDos = await axios.get(
    `https://dummyjson.com/todos?limit=5&skip=${(currentPage - 1) * 5}`
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
          {/* {initialPostVal?.data?.posts?.map((post, index) => (
            <div key={index}>
              {post.title} <b> Views:</b> {post.views}
            </div>
          ))} */}

          {state.posts?.map((post, index) => (
            // <div key={index}>
            //   {" "}
            //   <h4>
            //     <Link to={`/post/${post.id}`}>
            //       {post.title} <b>Views:</b> {post.views}
            //     </Link>
            //   </h4>
            // </div>
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img src={postImage} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Post:{post.id}</h5>
                <p className="card-text">{post.title}</p>
                <a href="#" className="btn btn-primary">
                  Views: {post.views}
                </a>
              </div>
            </div>
          ))}
        </>
      );
    } else if (state.selectedResource === "ToDos") {
      return (
        <>
          {/* {initialToDosVal?.data?.todos?.map((todo, index) => {
            return <div key={index}> {todo.todo} </div>;
          })} */}
          {state.toDos?.map((todo, index) => (
            <div key={index}>
              <h4>
                <Link to={`/todo/${todo.id}`}>
                  {todo.todo}
                  {/* ToDoDetails */}
                </Link>
              </h4>
            </div>
          ))}
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
