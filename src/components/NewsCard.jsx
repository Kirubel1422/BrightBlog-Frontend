import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { truncateDesc } from "../utils/basic";
import { Link } from "react-router-dom";

const NewsCard = ({ title, content, route }) => {
  return (
    <Card style={{ height: "350px" }}>
      <Card.Img
        height={150}
        variant="top"
        src="https://picsum.photos/300/200"
      />
      <Card.Body>
        <Card.Title className="text-truncate">{title}</Card.Title>
        <Card.Text>{truncateDesc(content, 100)}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={route} className="text-decoration-none">
          <Button variant="outline-success">Read more</Button>
        </Link>{" "}
      </Card.Footer>
    </Card>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NewsCard;
