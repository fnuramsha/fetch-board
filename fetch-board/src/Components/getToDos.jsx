import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";

const GetToDos = () => {
  const { dispatch, currentPage } = useContext(MyContext);

  const getToDos = async (currentPage) => {
    const toDos = await axios.get(
      `https://dummyjson.com/todos?limit=8&skip=${(currentPage - 1) * 8}`
    );
    return toDos.data.todos;
  };
  useEffect(() => {
    const fetchToDos = async () => {
      const updatedToDos = await getToDos(currentPage);
      if (updatedToDos && updatedToDos.length > 0) {
        dispatch({ type: "SET_TODOS", payload: updatedToDos });
      }
    };
    fetchToDos();
  }, [currentPage]);
};
export default GetToDos;
