import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import UserNavBar from "./components/UserNavBar";
import News from "./pages/News";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Container>
      <UserNavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Blogs />} path="/blogs" />
      </Routes>
    </Container>
  );
};

export default App;
