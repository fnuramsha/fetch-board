import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation(); // returns the current location

  let breadCrumb = null;
  if (location?.pathname?.includes("/todo/")) {
    breadCrumb = "ToDos/ToDoSInformation";
  } else if (location?.pathname?.includes("/post")) {
    breadCrumb = "Posts/PostsInformation";
  }
  if (breadCrumb != null) {
    return (
      <nav aria-label="breadcrumb" className="px-2">
        <ol className="breadcrumb mr-80">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/">Home</Link>/{breadCrumb}
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <>
      <nav aria-label="breadcrumb" className="px-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/"> Home</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};
// Define Props

Breadcrumb.propTypes = {
  path: PropTypes.string.isRequired,
};
export default Breadcrumb;
