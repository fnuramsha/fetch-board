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

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [rowsPerPage, setRowsPerPage] = useState(10);
  //   const indexOfLastItem = currentPage * rowsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  //   const currentItems = initialPostVal?.data?.posts?.slice(
  //     indexOfFirstItem,
  //     indexOfLastItem
  //   );
  //   //   find out total no of posts
  //   const totalPosts = Math.ceil(initialPostVal?.data?.posts / rowsPerPage);

  const values = {
    initialPostVal,
    setPostVal,
    getPosts,
    initialToDosVal,
    setToDosVal,
    getToDos,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
