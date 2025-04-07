import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import TodoImage from "./Images/background-image.jpg";

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
    <Container
      fluid
      className="d-flex justify-content-start"
      style={{
        minHeight: "100vh", // Full screen height
        backgroundImage: `url(${TodoImage})`,
        backgroundSize: "cover", // Cover the whole screen
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White with 70% opacity
        backgroundBlendMode: "overlay", // Blends color + image to give transparent effect
      }}
    >
      <div className="text-center">
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
    </Container>
  );
};

export default ToDos;
