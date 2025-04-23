import { useReducer } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const MyContext = createContext();

const initialState = {
  selectedResource: "",
  posts: [],
  toDos: [],
  singlePost: [],
  singleToDos: [],
  paginatedItems: [],
  currentPage: 1,
  searchField: "",
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
    case "SET_SEARCH_FIELD":
      return {
        ...state,
        searchField: payload,
      };
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchData = (e) => {
    const searchField = e.target.value;
    dispatch({ type: "SET_SEARCH_FIELD", payload: searchField });
  };

  const values = {
    dispatch,
    singlePost: state.singlePost,
    singleToDos: state.singleToDos,
    currentPage: state.currentPage,
    selectedResource: state.selectedResource,
    searchField: state.searchField,
    searchData,
    posts: state.posts,
    toDos: state.toDos,
  };
  return <MyContext.Provider value={values}>{children} </MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MyContext, MyProvider };
