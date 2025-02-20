// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import Post from "./Components/Post";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/${post.id}" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
