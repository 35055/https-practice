import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";
import Create from "../components/create";
import Post from "../components/post";
import Edit from "../components/edit";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post-edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Router;
