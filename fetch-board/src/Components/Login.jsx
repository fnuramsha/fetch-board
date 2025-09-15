const Login = () => {
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

        <button type="button"> Submit </button>
      </form>
    </>
  );
};

export default Login;
