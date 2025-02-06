import { useContext, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MyContext } from "../context/dataContext";
import Pagination from "./Pagination";

const Home = () => {
  const {
    initialPostVal,
    setPostVal,
    getPosts,
    initialToDosVal,
    setToDosVal,
    getToDos,
  } = useContext(MyContext);
  const [value, setValue] = useState("");

  const options = [
    { label: "Resources", value: 0 },
    { label: "Posts", value: 1 },
    { label: "ToDos", value: 2 },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const updatedPost = await getPosts();
      setPostVal(updatedPost);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchToDos = async () => {
      const updatedToDos = await getToDos();
      setToDosVal(updatedToDos);
    };
    fetchToDos();
  }, []);
  //  for the purpose to show data

  const displayData = () => {
    if (value === "Posts") {
      console.log("ToDos Data from initialPostVal:", initialPostVal);
      return (
        <>
          {initialPostVal?.data?.posts?.slice(0, 1).map((post, index) => (
            <div key={index}>{post.body}</div>
          ))}
        </>
      );
    } else if (value === "ToDos") {
      console.log("ToDos Data from initialTodosVal:", initialToDosVal);
      return (
        <>
          {initialToDosVal?.data?.todos?.map((todo, index) => {
            return <div key={index}> {todo.todo} </div>;
          })}
        </>
      );
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
        {/* Bootstrap dropdown */}
        {/* <DropdownButton id="dropdown-basic-button" variant="secondary">
          <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
        </DropdownButton> */}
        {/* React bootstrap dropdown */}

        <DropdownButton
          id="dropdown-basic-button"
          variant="secondary"
          title={value || "Resources"}
        >
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              value={option.label}
              onClick={() => setValue(option.label)}
            >
              {" "}
              {option.label}{" "}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}

        {/* for border */}
        <div className="col-10 main-content p-4">
          <div className="border border-3 p-3 mt-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                data-mdb-ripple-init
              >
                search
              </button>
            </div>
            <div className="col-12 main-content p-6">
              <div className="border border-6 p-3 mt-3">
                <h3 className="text-decoration-underline">Posts and ToDos</h3>
                <div>{displayData()}</div>
              </div>
            </div>

            {/* Pagination */}

            {/* <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only"></span>
                  </a>
                </li>
              </ul>
            </nav> */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
