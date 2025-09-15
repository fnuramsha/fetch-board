import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import Post from "./Components/PostDetails";
import ToDos from "./Components/ToDosDetails";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/todo/:id" element={<ToDos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
