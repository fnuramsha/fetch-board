import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Confirm Password"
          />
        </div>
        <button type="button" onClick={() => navigate("/")}>
          {" "}
          Submit{" "}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          {" "}
          Back{" "}
        </button>
      </form>
    </>
  );
};

export default SignUp;
