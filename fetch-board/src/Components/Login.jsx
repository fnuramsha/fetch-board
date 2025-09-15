import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(MyContext);

  const checkLogin = () => {
    dispatch({ type: "SET_LOGIN", payload: true });
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="password"
          />
        </div>
        <button type="button" onClick={() => navigate("/")}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Login;
