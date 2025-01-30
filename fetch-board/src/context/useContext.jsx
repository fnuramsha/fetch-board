import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("hello");
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {" "}
      {children}{" "}
    </MyContext.Provider>
  );
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
