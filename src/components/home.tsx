import { Link } from "react-router-dom";
import useGetPosts from "../hooks/useGetPosts";

const Home = () => {
  const { isLoading, posts } = useGetPosts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul style={{ display: "grid", gap: "10px" }}>
        {posts.map((post) => (
          <li
            style={{ border: "1px solid black", cursor: "pointer" }}
            key={post.id}
          >
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
