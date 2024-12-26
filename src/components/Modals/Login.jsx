import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const Login = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-muted">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* EMAIL  */}
        <InputGroup className="mb-4">
          <InputGroup.Text>
            <i className="bi bi-envelope"></i>
          </InputGroup.Text>

          <Form.Control type="email" placeholder="Email" />
        </InputGroup>

        {/* PASSWORD  */}
        <InputGroup className="mb-2">
          <InputGroup.Text>
            <i className="bi bi-key"></i>
          </InputGroup.Text>

          <Form.Control type="password" placeholder="Password" />
        </InputGroup>

        <Button variant="link" className="align-self-start">
          Forgot Password?
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="text-muted" variant="">
          Close
        </Button>
        <Button variant="success">Login</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
