import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const MyContext = createContext();

const getPosts = async () => {
  const initialPostVal = axios.get("https://dummyjson.com/posts");
  return initialPostVal;
};

const getToDos = async () => {
  const initialToDosVal = await axios.get("https://dummyjson.com/todos");
  console.log(initialToDosVal);
  return initialToDosVal;
};

const MyProvider = ({ children }) => {
  const [initialPostVal, setPostVal] = useState([]);
  const [initialToDosVal, setToDosVal] = useState([]);
  const [value, setValue] = useState("");

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
  //   find out total no of posts
  const totalPosts = Math.ceil(initialPostVal?.data?.posts / rowsPerPage);

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
              {post.title} <b>Views:</b> {post.views}{" "}
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
            <div key={index}> {todo.todo}</div>
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
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
