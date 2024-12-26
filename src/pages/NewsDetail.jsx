import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { demo_blog_img } from "../assets";
import MyCarousel from "../components/Carousel";

const newsDetail = {
  title: "React 18 Released with New Features",
  description:
    "The latest release of React introduces a range of exciting new features designed to improve both performance and developer experience. One of the key updates is automatic batching, which optimizes rendering by grouping multiple state updates together, reducing unnecessary re-renders and enhancing app performance. Another significant advancement is concurrent rendering, a feature that allows React to work on multiple tasks simultaneously, ensuring that your application remains responsive even during heavy computational tasks or complex UI updates. Additionally, this release focuses on delivering a better developer experience, with enhanced debugging tools, improved error handling, and new APIs that simplify building and maintaining applications. Whether you're a seasoned developer or just starting with React, these updates provide powerful tools to create faster, more efficient, and user-friendly applications. Dive into the new features to unlock the full potential of modern React development!",
  datePosted: "2024-07-21",
  id: 1,
};

const NewsDetail = () => {
  const { newsId } = useParams();
  return (
    <Row className="mb-4 d-flex flex-column align-items-center justify-content-center">
      <Col sm={8} md={6}>
        <Image
          src={demo_blog_img}
          fluid
          style={{ maxHeight: "40vh" }}
          className="w-100 img-thumbnail"
        />

        <h1 className="mt-4">{newsDetail.title}</h1>

        <p className="lh-lg">{newsDetail.description}</p>

        <span className="p-1 bg-neutral rounded">{newsDetail.datePosted}</span>

        <div className="mt-5">
          <h4 className="mb-2">Related news</h4>
          <MyCarousel data={carouselData} />
        </div>
      </Col>
    </Row>
  );
};

const carouselData = [
  {
    imgTitle: "AI Revolution",
    title: "Transforming the Future",
    description:
      "Explore how artificial intelligence is reshaping industries, from automation to predictive analytics.",
    id: 2,
  },
  {
    imgTitle: "Cloud Computing",
    title: "Power of the Cloud",
    description:
      "Discover scalable and efficient solutions with cloud computing, enabling global collaboration and innovation.",
    id: 2,
  },
  {
    imgTitle: "Cybersecurity",
    title: "Securing the Digital World",
    description:
      "Learn about advanced strategies and tools to protect data and ensure privacy in the digital age.",
    id: 2,
  },
  {
    imgTitle: "IoT Innovations",
    title: "Connected Ecosystems",
    description:
      "Dive into the Internet of Things, where devices communicate seamlessly to create smarter environments.",
    id: 2,
  },
  {
    imgTitle: "Quantum Computing",
    title: "Next-Level Computing Power",
    description:
      "Uncover the potential of quantum computers to solve problems beyond the reach of traditional systems.",
    id: 2,
  },
];

export default NewsDetail;
