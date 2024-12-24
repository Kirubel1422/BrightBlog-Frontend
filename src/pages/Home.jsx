import {
  Button,
  Col,
  FloatingLabel,
  Form,
  Image,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { demo_blog_img } from "../assets";
import MiniBlog from "../components/MiniBlog";

const Home = () => {
  return (
    <Row>
      <Col className="d-flex flex-column align-items-center gap-3 ">
        <h4>News Headlines</h4>
        <ListGroup>
          <ListGroup.Item as="a">Cras justo odio</ListGroup.Item>
          <ListGroup.Item as="a">Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item as="a">Morbi leo risus</ListGroup.Item>
          <ListGroup.Item as="a">Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item as="a">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Button variant="outline-secondary" className="mt-2">
          Show more ...
        </Button>
      </Col>

      <Col sm={7}>
        <Image
          fluid
          src={demo_blog_img}
          style={{ height: "33vh", width: "100%" }}
        />

        <h1 className="mt-4">Blog Title</h1>
        <div dangerouslySetInnerHTML={{ __html: demoBlog }}></div>
      </Col>

      <Col>
        <FloatingLabel
          controlId="floatingInput"
          label="Search Blog"
          className="mb-3 "
          style={{ fontSize: "16px" }}
        >
          <Form.Control type="text" placeholder="Node JS" />
        </FloatingLabel>

        <Stack diretion="vertical" gap={3}>
          {blogPosts.map((blogPost) => (
            <>
              <MiniBlog {...blogPost} key={blogPost.key} />
              <hr />
            </>
          ))}
        </Stack>

        <Button variant="outline-secondary">Show more ...</Button>
      </Col>
    </Row>
  );
};

const blogPosts = [
  {
    title: "Flutter vs React Native",
    description:
      "Many people wonder if React Native is easier to learn when compared to Flutter.",
    datePosted: "2024-07-23",
  },
  {
    title: "Introduction to JavaScript ES6 Features",
    description:
      "ES6 introduces many powerful features, such as arrow functions, template literals, and promises.",
    datePosted: "2024-08-01",
  },
  {
    title: "The Rise of Web3 and Blockchain",
    description:
      "Blockchain and Web3 technologies are revolutionizing the way we interact with digital assets and decentralized apps.",
    datePosted: "2024-06-15",
  },
  {
    title: "Building Scalable React Applications",
    description:
      "Learn best practices and tips for building large, scalable applications with React.",
    datePosted: "2024-07-10",
  },
  {
    title: "Design Principles in UI/UX",
    description:
      "Explore key principles in UI/UX design to create user-friendly and engaging web experiences.",
    datePosted: "2024-05-20",
  },
];

const demoBlog = `
<h1>Welcome to the Blog</h1>
<p>This blog covers various topics in <strong>technology</strong>, <strong>design</strong>, and <strong>development</strong>.</p>
<ul>
  <li>React</li>
  <li>Bootstrap</li>
  <li>Web Development</li>
</ul>
<p>Let's dive into <em>great content</em>!</p>

<h2>Topics We Cover</h2>
<p>Our articles span a wide range of areas, including:</p>
<ol>
  <li><strong>Frontend Development</strong>
    <ul>
      <li>React.js</li>
      <li>Angular</li>
      <li>Vue.js</li>
    </ul>
  </li>
  <li><strong>Backend Development</strong>
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Database Management</li>
    </ul>
  </li>
  <li><strong>UI/UX Design</strong>
    <ul>
      <li>Prototyping</li>
      <li>Accessibility</li>
      <li>Responsive Design</li>
    </ul>
  </li>
</ol>

<p>We also provide guides and tutorials for beginners and advanced developers alike. Here's what makes us stand out:</p>
<ul>
  <li>Detailed tutorials with code examples</li>
  <li>Expert opinions from industry leaders</li>
  <li>Regularly updated content</li>
</ul>

<h3>Featured Articles</h3>
<p>Take a look at some of our popular articles:</p>
<div>
  <article>
    <h4>The Ultimate Guide to React Hooks</h4>
    <p>Learn how to use React hooks like <code>useState</code>, <code>useEffect</code>, and more.</p>
  </article>
  <article>
    <h4>10 Tips for Better UI Design</h4>
    <p>Discover how to create user-friendly designs that work seamlessly across devices.</p>
  </article>
</div>

<h2>About Our Community</h2>
<p>Join our growing community of developers and designers. Here’s what you can do:</p>
<ul>
  <li>Participate in discussions</li>
  <li>Share your knowledge</li>
  <li>Collaborate on projects</li>
</ul>

<h3>Upcoming Events</h3>
<p>Don’t miss out on these exciting events:</p>
<ul>
  <li>Web Development Bootcamp - June 25th</li>
  <li>React Summit - July 10th</li>
  <li>UX Design Workshop - August 15th</li>
</ul>

<p>Here's a glimpse into our future plans:</p>
<blockquote>
  "We aim to become the leading platform for developers and designers worldwide." 
  <br>— The Blog Team
</blockquote>

<h2>Extended Content</h2>
${"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet lorem at turpis varius, et aliquam justo hendrerit.</p>".repeat(
  50
)}

<h3>Conclusion</h3>
<p>Thank you for visiting our blog. Stay tuned for more amazing content, and don’t forget to share your thoughts in the comments below!</p>
`;

export default Home;
