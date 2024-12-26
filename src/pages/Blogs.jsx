import { Button, Col, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <>
      <h2>Latest Blogs</h2>
      <p>
        The articles featured here are sourced from my own experience and
        reputable outlets as well. I invite you to dive deeper into these
        subjects through further research to gain a more comprehensive and
        insightful perspective.
      </p>

      <Row>
        {blogPosts.map((post, key) => (
          <Col sm={4} className="mb-4" key={key}>
            <BlogCard
              content={post.description}
              title={post.title}
              postedDate={post.datePosted}
              route={"/blogs/" + post.id}
              isNew={key % 3 === 0}
            />
          </Col>
        ))}
      </Row>

      <hr />
      <div className="d-flex w-100 justify-content-center mb-4">
        <Button variant="outline-secondary">Show More ...</Button>
      </div>
    </>
  );
};

const blogPosts = [
  {
    title: "Flutter vs React Native",
    description:
      "Many people wonder if React Native is easier to learn when compared to Flutter.",
    datePosted: "2024-07-23",
    id: 1,
  },
  {
    title: "Introduction to JavaScript ES6 Features",
    description:
      "ES6 introduces many powerful features, such as arrow functions, template literals, and promises.",
    datePosted: "2024-08-01",
    id: 1,
  },
  {
    title: "The Rise of Web3 and Blockchain",
    description:
      "Blockchain and Web3 technologies are revolutionizing the way we interact with digital assets and decentralized apps.",
    datePosted: "2024-06-15",
    id: 1,
  },
  {
    title: "Building Scalable React Applications",
    description:
      "Learn best practices and tips for building large, scalable applications with React.",
    datePosted: "2024-07-10",
    id: 1,
  },
  {
    title: "Design Principles in UI/UX",
    description:
      "Explore key principles in UI/UX design to create user-friendly and engaging web experiences.",
    datePosted: "2024-05-20",
    id: 1,
  },
];

export default Blogs;
