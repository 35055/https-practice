import { useState } from "react";
import useEditPost from "../hooks/useEditPost";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { id = "" } = useParams();
  const { handleEdit } = useEditPost(id);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(name, body);
          navigate("/");
          setName("");
          setBody("");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <input
          style={{ width: "200px", height: "30px" }}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          style={{ width: "200px", height: "30px" }}
          type="text"
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Edit;
