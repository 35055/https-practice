import { useParams, useNavigate } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import useDeletePost from "../hooks/useDeletePost";

const Post = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { post, isLoading } = useGetPost(id);
  const { handleDelete } = useDeletePost(id);

  if (isLoading || !post) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{id}</p>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            handleDelete();
            navigate("/");
          }}
        >
          Delete
        </button>
        <button onClick={() => navigate(`/post-edit/${id}`)}>Edit</button>
      </div>
    </div>
  );
};

export default Post;
