import { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { handleCreate } = useCreatePost();
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(name, body);
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
