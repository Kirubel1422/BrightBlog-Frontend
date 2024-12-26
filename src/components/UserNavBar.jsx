import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  Image,
  InputGroup,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { routing } from "../utils/basic";
import Signup from "./Modals/Signup";
import Login from "./Modals/Login";

const navData = [
  {
    label: "Home",
    id: "home",
    route: "/",
    isActive: true,
  },
  {
    label: "News",
    id: "news",
    route: "/news",
  },
  {
    label: "Blogs",
    id: "blogs",
    route: "/blogs",
  },
];

const UserNavBar = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    setActive(routing(location.pathname));
  }, [location.pathname]);

  // For signup modal
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // For conditional login
  const userLoggedIn = false;

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-teritiary mb-4 gap-5 d-flex flex-row justify-content-center align-items-center"
      >
        <Navbar.Brand className="fs-3">Bright Tech Blog</Navbar.Brand>

        <Navbar.Collapse>
          <Nav className="d-flex align-items-center justify-content-between w-100">
            <Stack direction="horizontal" gap={4}>
              {navData.map((nav, key) => (
                <Link
                  to={nav.route}
                  id={nav.id}
                  key={key}
                  className={`${
                    nav.id === active ? "text-success" : "text-secondary"
                  }  text-decoration-none fs-5`}
                >
                  {nav.label}
                </Link>
              ))}
            </Stack>
            <Form inline>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search topic"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>

        {userLoggedIn ? (
          <Dropdown>
            <Dropdown.Toggle
              className=" border-0"
              variant=""
              id="dropdown-basic"
            >
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}
                width={48}
                height={48}
              />{" "}
              Kirubel Mamo
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="d-flex gap-2">
                <i className="bi bi-gear"></i> <span>Account Setting</span>
              </Dropdown.Item>
              <Dropdown.Item className="d-flex gap-2">
                <i className="bi bi-box-arrow-left"></i> <span>Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Stack direction="horizontal">
            <Button variant="success" onClick={() => setShowSignUp(true)}>
              Signup
            </Button>
            <Button variant="" onClick={() => setShowLogin(true)}>
              Login
            </Button>
          </Stack>
        )}
      </Navbar>

      <Signup onHide={() => setShowSignUp(false)} show={showSignUp} />
      <Login onHide={() => setShowLogin(false)} show={showLogin} />
    </>
  );
};

export default UserNavBar;
