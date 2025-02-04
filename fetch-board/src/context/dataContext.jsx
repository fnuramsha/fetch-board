import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const getPosts = async () => {
  const newData = axios.get("https://dummyjson.com/posts/");
  return newData;
};

const getToDos = async () => {
  const toDosData = await axios.get("https://dummyjson.com/todos");
  //   console.log(toDosData.data.todos);
  return toDosData.data.todos;
};

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [initialPostVal, setPostVal] = useState([]);
  const [initialToDosVal, setToDosVal] = useState([]);

  const value = {
    initialPostVal,
    setPostVal,
    getPosts,
    initialToDosVal,
    setToDosVal,
    getToDos,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
