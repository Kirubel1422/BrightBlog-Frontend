import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { truncateDesc } from "../utils/basic";

const MiniBlog = ({ isNew, title, description, datePosted }) => {
  return (
    <div>
      <Link className="cursor-pointer text-primary">
        {title} {isNew && <Badge bg="info">New</Badge>}
      </Link>
      <p>{truncateDesc(description, 100)}</p>
      <span className="p-1 bg-neutral rounded" style={{ fontSize: "14px" }}>
        {datePosted}
      </span>
    </div>
  );
};

MiniBlog.propTypes = {
  isNew: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  datePosted: PropTypes.string.isRequired,
};
export default MiniBlog;
