import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { selectedPage, detailsPage } = useContext(MyContext);
  const location = useLocation(); // returns the current location
  console.log("I am selectedPage useState", selectedPage);
  console.log("Details page useState", detailsPage);

  const handleClick = () => {
    return <h1> Hello </h1>;
  };
  let breadCrumb = null;
  if (location?.pathname?.includes("/todo/")) {
    breadCrumb = "ToDoSInformation";
  } else if (location?.pathname?.includes("/post")) {
    breadCrumb = "PostsInformation";
  }
  if (breadCrumb != null) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/">Home</Link>/{selectedPage}/{breadCrumb}
          </li>
        </ol>
      </nav>
    );
  }

  // if (location?.pathname?.includes("/todo/")) {
  //   return (
  //     <nav aria-label="breadcrumb">
  //       <ol className="breadcrumb">
  //         <li className="breadcrumb-item active" aria-current="page">
  //           Home/{selectedPage}/ToDoSInformation
  //         </li>
  //       </ol>
  //     </nav>
  //   );
  // } else if (location?.pathname?.includes("/post")) {
  //   return (
  //     <nav aria-label="breadcrumb">
  //       <ol className="breadcrumb">
  //         <li
  //           className="breadcrumb-item active"
  //           aria-current="page"
  //           onClick={handleClick}
  //         >
  //           Home/{selectedPage}/PostsInformation
  //         </li>
  //       </ol>
  //     </nav>
  //   );
  // }

  return (
    <>
      <nav aria-label="breadcrumb">
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
