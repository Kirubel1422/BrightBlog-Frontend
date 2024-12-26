import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import UserNavBar from "./components/UserNavBar";
import News from "./pages/News";
import Blogs from "./pages/Blogs";
import NewsDetail from "./pages/NewsDetail";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return (
    <Container>
      <UserNavBar />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<NewsDetail />} path="/news/:newsId" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<BlogDetail />} path="/blogs/:blogId" />
      </Routes>
    </Container>
  );
};

export default App;
