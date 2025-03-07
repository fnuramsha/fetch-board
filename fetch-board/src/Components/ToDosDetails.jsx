import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const ToDos = () => {
  const { getSingleToDos, setSingleToDos, singleToDos } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleToDos = async () => {
      const updatedSingleToDos = await getSingleToDos(id);
      setSingleToDos(updatedSingleToDos);
    };
    fetchSingleToDos();
  }, []);
  return (
    <div>
      <h4>ToDos Information: </h4>

      <p>
        <b> ToDos Title : </b>
        {singleToDos?.data?.todo}
      </p>
      <p>
        <b>ToDos userId: </b>
        {singleToDos?.data?.userId}
      </p>
    </div>
  );
};

export default ToDos;
