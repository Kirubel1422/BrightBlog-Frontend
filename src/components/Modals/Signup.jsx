import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const Signup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-muted">
          Signup
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-3">
        {/* FIRST NAME AND LAST NAME  */}
        <div className="d-flex align-items-center gap-2">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-person"></i>
            </InputGroup.Text>

            <Form.Control placeholder="First name" />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-person"></i>
            </InputGroup.Text>

            <Form.Control placeholder="Last name" />
          </InputGroup>
        </div>

        {/* EMAIL  */}
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-envelope"></i>
          </InputGroup.Text>

          <Form.Control type="email" placeholder="Email" />
        </InputGroup>

        {/* PASSWORD  */}
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-key"></i>
          </InputGroup.Text>

          <Form.Control type="password" placeholder="Password" />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="text-muted" variant="">
          Close
        </Button>
        <Button variant="success">Signup</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Signup;
