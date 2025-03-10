import { useReducer, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const MyContext = createContext();

const getPosts = async () => {
  const posts = await axios.get("https://dummyjson.com/posts");
  return posts.data.posts;
};

const getToDos = async () => {
  const toDos = await axios.get("https://dummyjson.com/todos");
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
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedPage, setSelectedPage] = useState(""); // For Breadcrumb

  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const indexOfLastItem = currentPage * rowsPerPage;
  // const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  // const currentPosts = initialPostVal?.data?.posts?.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );
  // const currentToDos = initialToDosVal?.data?.todos?.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );

  // const totalPosts = Math.ceil(
  //   initialPostVal?.data?.posts.length / rowsPerPage
  // );
  // const totalTodos = Math.ceil(
  //   initialToDosVal?.data?.todos.length / rowsPerPage
  // );

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
            <div key={index}>
              {" "}
              <h4>
                <Link to={`/post/${post.id}`}>
                  {post.title} <b>Views:</b> {post.views}
                </Link>
              </h4>
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
    selectedPage,
    setSelectedPage,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
