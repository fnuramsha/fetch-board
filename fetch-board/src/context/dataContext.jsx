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
