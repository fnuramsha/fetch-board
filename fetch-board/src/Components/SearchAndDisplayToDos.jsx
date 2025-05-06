import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/dataContext";

const toDoImages = [
  "https://plus.unsplash.com/premium_photo-1683309568772-57011d6c1b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D",
  "https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg",
  "https://media.istockphoto.com/id/2162617977/photo/2025-new-year-resolutions-on-notepad-with-coffee-and-laptop.jpg?s=612x612&w=0&k=20&c=3FZ9R7E6fuP11QpzhGUT4TPvvrNqvwgJXwYOBq-sDVw=",
  "https://cdn.create.vista.com/api/media/small/273401880/stock-photo-top-view-100-days-check-list-stationery-laptop-smartphone-wooden",
  "https://media.istockphoto.com/id/1199308486/photo/flatlay-with-hands-typing-on-a-keyboard-of-laptop-white-desk.jpg?s=612x612&w=0&k=20&c=v5S89-I3kL-1AR1HmvbrGyGUKgVeWxFpszdRziIc9hE=",
  "https://media.istockphoto.com/id/915319208/photo/shopping-list.jpg?s=612x612&w=0&k=20&c=udjKS7pK2RXJUE6rn90ya57VHJS8VOTAhXmsGeiy9wA=",
  "https://img.freepik.com/premium-photo/efficient-organization-writing-todo-list-notebook_390739-724.jpg?semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/list-business-schedule-motivational-inspirational-quotes-words-typography-top-view-lettering_21336-6669.jpg",
];

const SearchAndDisplayToDos = () => {
  const { toDos, searchField } = useContext(MyContext);

  const filteredToDos = toDos?.filter((todo) =>
    todo.todo.toLowerCase().includes(searchField)
  );
  return (
    <>
      <Row>
        {" "}
        {filteredToDos.map((todo, index) => (
          <Col sm={3} key={index}>
            <div className="holder">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={toDoImages[index]}
                  style={{ height: "200px" }}
                />
                <Card.Body style={{ height: "200px" }}>
                  <Card.Title className="fw-bold text-center">
                    ToDo:{todo.id}{" "}
                  </Card.Title>
                  <Card.Text>Title: {todo.todo}</Card.Text>
                  <Link to={`/todo/${todo.id}`} className="link-dark">
                    ToDo Details
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}{" "}
      </Row>
    </>
  );
};

export default SearchAndDisplayToDos;
