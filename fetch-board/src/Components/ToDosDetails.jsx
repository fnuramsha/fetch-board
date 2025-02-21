import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const ToDos = () => {
  const { getSingleToDos, setSingleToDos } = useContext(MyContext);
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
      <h1>hello</h1>
    </div>
  );
};

export default ToDos;
