import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch, userName } = useContext(MyContext);

  const checkUserName = (e) => {
    const userName = e.target.value;
    dispatch({ type: "SET_USERNAME", payload: userName });
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={userName}
            onChange={checkUserName}
          />
        </div>

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
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "SET_LOGIN", payload: true });
            navigate("/");
          }}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Login;
