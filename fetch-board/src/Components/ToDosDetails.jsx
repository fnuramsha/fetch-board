import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import BackgroundImage from "./Images/todos.jpg";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Card
        style={{
          width: "60rem",
          height: "15rem",
          border: "3px solid #ccc",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <div className="d-flex">
            <Card.Title>ToDos Information</Card.Title>
            <Link to="/" className="ms-auto link-dark">
              Back
            </Link>
          </div>{" "}
          <Card.Text>
            <b>ToDos Title: </b> <br /> {singleToDos?.todo} <br /> <br />
            <b>ToDos userId:</b> {singleToDos?.userId} <br /> <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ToDos;
