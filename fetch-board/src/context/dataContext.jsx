import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// function getPosts() {
//   useEffect(() => {
//     axios.get("https://dummyjson.com/posts").then((postsResponse) => {
//       console.log(postsResponse);
//     });
//   }, []);

//   return <div>tutorial</div>;
// }

const getPosts = async () => {
  try {
    const initialPostVal = await axios.get("https://dummyjson.com/posts");
    return initialPostVal;
  } catch (error) {
    console.log(error);
  }
};

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [initialPostVal, setPostVal] = useState([]);

  const value = {
    getPosts,
    initialPostVal,
    setPostVal,
  };
  return <MyContext.Provider value={value}> {children} </MyContext.Provider>;
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
