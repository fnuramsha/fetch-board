import { useContext, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MyContext } from "../context/dataContext";

const Home = () => {
  const {
    initialPostVal,
    setPostVal,
    getPosts,
    initialToDosVal,
    setToDosVal,
    getToDos,
  } = useContext(MyContext);

  // Dropdown related stuff
  const [value, setValue] = useState("");
  const options = [
    { label: "Resources", value: 1 },
    { label: "Posts", value: 1 },
    { label: "ToDos", value: 3 },
  ];

  // commented this code for future reference
  // function handleSelect(event) {
  //   setValue(event.target.label);
  // }
  // --------------------------

  useEffect(() => {
    const fetchData = async () => {
      const updatedData = await getPosts();
      setPostVal(updatedData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchToDos = async () => {
      const updatedToDos = await getToDos();
      setToDosVal(updatedToDos);
    };
    fetchToDos();
  }, []);

  //  for the purpose to show data

  const displayContent = () => {
    if (value === "Posts") {
      return (
        <>
          {initialPostVal?.data?.posts?.map((post, index) => (
            <div key={index}> {post.body} </div>
          ))}
        </>
      );
    } else if (value === "ToDos") {
      return (
        <>
          {initialToDosVal?.data?.todos?.map((todo, index) => (
            <div key={index}> {todo.body} </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
        {/* Bootstrap dropdown */}
        <DropdownButton
          id="dropdown-basic-button"
          title={value || "Resources"}
          variant="secondary"
        >
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              value={option.value}
              onClick={() => {
                setValue(option.label);

                // initialPostVal?.data?.posts?.map((post, index) => {

                //   return <div key={index}>{post.body}</div>;
              }}
            >
              {option.label}
            </Dropdown.Item>
          ))}
          {/* <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item> */}
        </DropdownButton>

        {/* Dropdown related stuff , Commented this code for future reference*/}
        {/* <select className="form-select" onChange={handleSelect}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
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
                <div>{displayContent()}</div>
              </div>
            </div>

            {/* Another pagination */}

            <nav aria-label="Page navigation example">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
