import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
const MyContext = createContext();

const getPosts = async () => {
  const initialPostVal = await axios.get("https://dummyjson.com/posts");
  console.log(initialPostVal);
  return initialPostVal;
};

const getToDos = async () => {
  const initialToDosVal = await axios.get("https://dummyjson.com/todos");
  console.log(initialToDosVal);
  return initialToDosVal;
};

const getSinglePosts = async (id) => {
  const singlePostVal = await axios.get(`https://dummyjson.com/posts/${id}`);
  console.log("Post Id", id);
  console.log(singlePostVal);

  return singlePostVal;
};

const getSingleToDos = async (id) => {
  const singleToDos = await axios.get(`https://dummyjson.com/todos/${id}`);
  console.log("ToDo id and Single ToDos", id, singleToDos);
  return singleToDos;
};

const MyProvider = ({ children }) => {
  const [initialPostVal, setPostVal] = useState([]);
  const [initialToDosVal, setToDosVal] = useState([]);
  const [value, setValue] = useState("");
  const [singlePostVal, setSinglePostVal] = useState([]);
  const [singleToDos, setSingleToDos] = useState([]);
  const [selectedPage, setSelectedPage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentPosts = initialPostVal?.data?.posts?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentToDos = initialToDosVal?.data?.todos?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPosts = Math.ceil(
    initialPostVal?.data?.posts.length / rowsPerPage
  );
  const totalTodos = Math.ceil(
    initialToDosVal?.data?.todos.length / rowsPerPage
  );

  const displayData = () => {
    if (value === "Posts") {
      console.log("ToDos Data from initialPostVal:", initialPostVal);

      return (
        <>
          {/* {initialPostVal?.data?.posts?.map((post, index) => (
            <div key={index}>
              {post.title} <b> Views:</b> {post.views}
            </div>
          ))} */}

          {currentPosts?.map((post, index) => (
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
    } else if (value === "ToDos") {
      console.log("ToDos Data from initialTodosVal:", initialToDosVal);

      return (
        <>
          {/* {initialToDosVal?.data?.todos?.map((todo, index) => {
            return <div key={index}> {todo.todo} </div>;
          })} */}
          {currentToDos?.map((todo, index) => (
            <div key={index}>
              <h4>
                <Link to={`/todo/${todo.id}`}>{todo.todo}</Link>
              </h4>
            </div>
          ))}
        </>
      );
    }
  };

  const values = {
    initialPostVal,
    setPostVal,
    getPosts,
    initialToDosVal,
    setToDosVal,
    getToDos,
    displayData,
    value,
    setValue,
    currentPage,
    setCurrentPage,
    totalPosts,
    totalTodos,
    getSinglePosts,
    singlePostVal,
    setSinglePostVal,
    getSingleToDos,
    singleToDos,
    setSingleToDos,
    selectedPage,
    setSelectedPage,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
