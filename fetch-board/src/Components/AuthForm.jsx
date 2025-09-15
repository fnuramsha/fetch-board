import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const navigate = useNavigate();
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
