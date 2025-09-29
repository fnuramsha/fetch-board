import { useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/dataContext";

const AuthForm = () => {
  const navigate = useNavigate();
  const { userName, isLogin } = useContext(MyContext);

  return (
    <>
      <Container>
        <div className="float-end">
          {isLogin ? (
            <span>
              <strong>{userName}</strong>
            </span>
          ) : (
            <button type="button" onClick={() => navigate("/login")}>
              Login{" "}
            </button>
          )}
          <button type="button" onClick={() => navigate("/SignUp")}>
            SignUp
          </button>
        </div>
      </Container>
    </>
  );
};

export default AuthForm;
