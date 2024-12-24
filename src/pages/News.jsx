import { Button, Col, Row } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const News = () => {
  return (
    <>
      <h2>Tech News for you</h2>
      <p>
        The news shared here comes from various trusted sources. I encourage you
        to explore these topics further through your own research for a deeper
        understanding and broader perspective.
      </p>

      <Row>
        {techNews.map((news, key) => (
          <Col sm={4} className="mb-4" key={key}>
            <NewsCard
              content={news.description}
              route={"#"}
              title={news.title}
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

const techNews = [
  {
    title: "React 18 Released with New Features",
    description:
      "The latest release of React includes new features such as automatic batching, concurrent rendering, and a better developer experience.",
    datePosted: "2024-07-21",
  },
  {
    title: "AI Revolution in Healthcare: What's Next?",
    description:
      "AI-powered technologies are transforming healthcare, from diagnostics to personalized treatments. We explore what's next for AI in the medical field.",
    datePosted: "2024-07-19",
  },
  {
    title: "Apple Announces New M2 Chipset",
    description:
      "Apple introduces the next-generation M2 chipset with improved performance, energy efficiency, and powerful capabilities for professionals.",
    datePosted: "2024-07-18",
  },
  {
    title: "Google's Quantum Computing Breakthrough",
    description:
      "Google's latest achievement in quantum computing could potentially revolutionize industries like cybersecurity, cryptography, and machine learning.",
    datePosted: "2024-07-16",
  },
  {
    title: "Elon Musk's Latest SpaceX Mission",
    description:
      "SpaceX successfully launches another Starship mission, paving the way for future Mars exploration. Here's what we know about this ambitious mission.",
    datePosted: "2024-07-14",
  },
  {
    title: "5G and the Future of Mobile Connectivity",
    description:
      "With the rollout of 5G networks across the globe, we explore the impact of ultra-fast mobile connectivity on industries like gaming, healthcare, and autonomous vehicles.",
    datePosted: "2024-07-12",
  },
  {
    title: "Tech Giants Collaborate on Green Energy Solutions",
    description:
      "Tech companies like Microsoft, Google, and Amazon are teaming up to reduce carbon footprints and promote sustainable energy solutions for the tech industry.",
    datePosted: "2024-07-10",
  },
  {
    title: "Tesla's Full Self-Driving Cars Get Closer",
    description:
      "Tesla's Full Self-Driving technology is making significant progress, and the company is nearing its goal of fully autonomous vehicles on the road.",
    datePosted: "2024-07-08",
  },
];

export default News;
