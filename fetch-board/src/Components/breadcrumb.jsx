import PropTypes from "prop-types";
import { useContext } from "react";
import { MyContext } from "../context/dataContext";

const Breadcrumb = ({ value }) => {
  const { selectedPage } = useContext(MyContext);
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

Breadcrumb.protoTypes = {
  value: PropTypes.string.isRequired,
};
export default Breadcrumb;
