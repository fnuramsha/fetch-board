import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Placeholder } from "react-bootstrap";
const Home = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 p-5">
        <DropdownButton
          id="dropdown-basic-button"
          title="Resources"
          variant="secondary"
        >
          <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
        </DropdownButton>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
