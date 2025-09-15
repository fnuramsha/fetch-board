import { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/dataContext";

const AuthForm = () => {
  const navigate = useNavigate();
  const { dispatch, userName } = useContext(MyContext);

  const checkUserName = (e) => {
    const userName = e.target.value;
    dispatch({ type: "SET_USERNAME", payload: userName });
  };

  return (
    <>
      <Container>
        <div className="float-end">
          <button type="button" onClick={() => navigate("/login")}>
            Login{" "}
          </button>
          <button type="button">SignUp</button>
        </div>
      </Container>
    </>
  );
};

export default AuthForm;
