import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="position-absolute top-0 start-0 p-5">
        <DropdownButton
          id="dropdown-basic-button"
          title="Resources"
          variant="secondary"
        >
          <Dropdown.Item href="#/action-1">Posts</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Todos</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
export default Home;
