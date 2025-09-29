import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import Post from "./Components/PostDetails";
import ToDos from "./Components/ToDosDetails";
import Login from "./components/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/post/:id" element={<Post />} />
          <Route path="/todo/:id" element={<ToDos />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
