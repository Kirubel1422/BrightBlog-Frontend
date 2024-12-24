import PropTypes from "prop-types";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { truncateDesc } from "../utils/basic";
import { Link } from "react-router-dom";

const BlogCard = ({ title, content, route, isNew, postedDate }) => {
  return (
    <Card style={{ height: "350px" }}>
      <Card.Img
        height={150}
        variant="top"
        src="https://picsum.photos/300/200"
      />
      <Card.Body>
        <Card.Title className="text-truncate">
          {title}
          {isNew && <Badge bg="primary">New</Badge>}
        </Card.Title>
        <Card.Text>{truncateDesc(content, 100)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          <Link to={route} className="text-decoration-none">
            <Button variant="outline-success">Read more</Button>
          </Link>{" "}
          <span className="p-1 bg-neutral rounded" style={{ fontSize: "14px" }}>
            {postedDate}
          </span>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  postedDate: PropTypes.string.isRequired,
};

export default BlogCard;
