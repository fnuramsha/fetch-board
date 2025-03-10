import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const ToDos = () => {
  const { getSingleToDos, singleToDos, dispatch } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleToDos = async () => {
      const updatedSingleToDos = await getSingleToDos(id);
      if (updatedSingleToDos) {
        dispatch({ type: "SET_SINGLETODOS", payload: updatedSingleToDos });
      }
    };
    fetchSingleToDos();
  }, []);
  return (
    <div>
      <h4>ToDos Information: </h4>

      <p>
        <b> ToDos Title : </b>
        {singleToDos?.todo}
      </p>
      <p>
        <b>ToDos userId: </b>
        {singleToDos?.userId}
      </p>
    </div>
  );
};

export default ToDos;
