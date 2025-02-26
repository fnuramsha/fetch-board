import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { selectedPage, detailsPage } = useContext(MyContext);
  const location = useLocation(); // returns the current location
  console.log("I am selectedPage useState", selectedPage);
  console.log("Details page useState", detailsPage);
  if (location?.pathname?.includes("/todo/")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Home/{selectedPage}/{detailsPage}
          </li>
        </ol>
      </nav>
    );
  } else if (location?.pathname?.includes("/post")) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Home/{selectedPage}/PostsInformation
          </li>
        </ol>
      </nav>
    );
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Home/{selectedPage}
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
