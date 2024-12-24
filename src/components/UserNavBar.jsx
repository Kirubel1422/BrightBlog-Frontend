import { useEffect, useState } from "react";
import { Button, Nav, Navbar, Stack } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

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
    switch (location.pathname) {
      case "/blogs":
        setActive("blogs");
        break;
      case "/news":
        setActive("news");
        break;
      default:
        setActive("home");
    }
  }, [location.pathname]);
  return (
    <Navbar
      expand="lg"
      className="bg-body-teritiary mb-4 gap-5 d-flex flex-row justify-content-center align-items-center"
    >
      <Navbar.Brand className="fs-3">Bright Tech Blog</Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="d-flex items-center justify-center gap-3">
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
        </Nav>
      </Navbar.Collapse>

      <Stack direction="horizontal">
        <Button variant="success">Signup</Button>
        <Button variant="none">Login</Button>
      </Stack>
    </Navbar>
  );
};

export default UserNavBar;
