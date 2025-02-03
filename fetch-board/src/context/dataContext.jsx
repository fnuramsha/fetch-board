import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const getPosts = async () => {
  const newData = axios.get("https://dummyjson.com/posts");
  return newData;
};

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [initialPostVal, setPostVal] = useState([]);

  const value = {
    initialPostVal,
    setPostVal,
    getPosts,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
