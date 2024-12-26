import {
  Button,
  ButtonGroup,
  Col,
  Form,
  Image,
  Offcanvas,
  Row,
  Stack,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { demoBlog } from "./Home";
import { useState } from "react";

const BlogDetail = () => {
  const { blogId } = useParams();

  // For OFFCANVAS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="d-flex flex-column align-items-center justify-content-center">
      <Col sm={8} md={6}>
        <h1>Flutter vs React Native</h1>
        <h4 className="text-muted fw-light">
          React Native OutPerforms Flutter.
        </h4>

        <div className="d-flex gap-3 align-items-center mt-4">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}
            width={64}
            height={64}
            className="rounded-circle"
          />
          <div>
            <span className="text-muted d-block fw-semibold">Kirubel Mamo</span>
            <p className="text-muted">3 min read . Jul 13, 2024</p>
          </div>
        </div>

        <div className="d-flex  py-2 my-4 px-3 justify-content-between align-items-center border-top border-bottom border-primary border-opacity-10">
          <div className="d-flex align-items-center gap-3">
            <Button className="d-flex gap-1 bg-transparent border-0 px-1">
              <i
                className="bi bi-suit-heart-fill"
                style={{ color: "#a6a6a6" }}
              ></i>
              <span className=" text-black-50" style={{ fontSize: "14px" }}>
                4.8k
              </span>
            </Button>

            <Button
              onClick={handleShow}
              className="d-flex gap-1 bg-transparent border-0 px-1"
            >
              <i className="bi bi-chat-fill" style={{ color: "#a6a6a6" }}></i>
              <span className=" text-black-50" style={{ fontSize: "14px" }}>
                80
              </span>
            </Button>
          </div>

          <div>
            <Button
              data-toggle="tooltip"
              data-placement="top"
              title="Share this blog"
              className="d-flex gap-1 bg-transparent border-0 px-1"
            >
              <i style={{ color: "#a6a6a6" }} className="bi bi-share"></i>
            </Button>
          </div>
        </div>

        {/* BLOG IMAGE  */}
        <Image
          src={"https://picsum.photos/400/300"}
          className="img-thumbnail w-100"
        />

        {/* BLOG TEXT SECTION  */}
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: demoBlog }}></p>
      </Col>

      {/* SHEET | OFFCANVAS  */}
      {show && (
        <Comments
          handleClose={handleClose}
          show={show}
          data={commentsData}
          placement={"end"}
        />
      )}
    </Row>
  );
};

const commentsData = [
  {
    name: "John Doe",
    datePosted: "2024-12-01T10:30:00Z",
    content:
      "This is an insightful article! I learned a lot about the new features in React.",
  },
  {
    name: "Jane Smith",
    datePosted: "2024-12-02T14:45:00Z",
    content:
      "Great post, but I would love to see more examples of the code in action.",
  },
  {
    name: "Sam Johnson",
    datePosted: "2024-12-03T08:20:00Z",
    content:
      "Interesting read! I have a question about how concurrent rendering works with React.",
  },
  {
    name: "Emily Davis",
    datePosted: "2024-12-04T16:05:00Z",
    content:
      "I appreciate the breakdown of the new features, but some explanations could be clearer.",
  },
  {
    name: "Michael Brown",
    datePosted: "2024-12-05T11:10:00Z",
    content:
      "Looking forward to seeing more posts like this. Can you write about best practices next?",
  },
];

const Comments = ({ show, handleClose, data, ...props }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Comments ({data.length})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form className="mb-4" onSubmit={() => null}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your thoughts</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={""}
              onChange={() => null}
              placeholder="Write your comment here"
            />
          </Form.Group>
          <Stack className="gap-1 d-flex flex-row justify-content-end">
            <Button className="mt-2 text-muted" variant="">
              Cancel
            </Button>
            <Button className="mt-2" variant="success" type="submit">
              Submit
            </Button>
          </Stack>
        </Form>
        <hr />
        {data.map((dt) => (
          <div key={dt.name} className="mb-5 px-2">
            <div className="d-flex align-items-center gap-2">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}
                width={48}
                height={48}
                className="rounded-circle"
              />
              <div>
                <span
                  className="d-block text-muted fw-medium"
                  style={{ fontSize: "14px" }}
                >
                  {dt.name}
                </span>
                <span className="d-block text-muted">{dt.datePosted}</span>
              </div>
            </div>

            <p style={{ fontSize: "14px" }} className="mt-4 text-muted">
              {dt.content}
            </p>

            <div className="d-flex align-items-center gap-3">
              <Button className="d-flex gap-1 bg-transparent border-0 px-1">
                <i
                  className="bi bi-suit-heart-fill"
                  style={{ color: "#a6a6a6" }}
                ></i>
                <span className=" text-black-50" style={{ fontSize: "14px" }}>
                  43
                </span>
              </Button>

              <Button className="d-flex gap-1 bg-transparent border-0 px-1">
                <i className="bi bi-chat-fill" style={{ color: "#a6a6a6" }}></i>
                <span className=" text-black-50" style={{ fontSize: "14px" }}>
                  80 replies
                </span>
              </Button>
            </div>
          </div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default BlogDetail;
