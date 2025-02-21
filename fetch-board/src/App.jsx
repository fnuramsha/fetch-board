import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import Post from "./Components/Post";

function App() {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
