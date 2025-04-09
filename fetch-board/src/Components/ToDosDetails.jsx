import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import BackgroundImage from "./Images/background-image.jpg";

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
  }, [id]);
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
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
