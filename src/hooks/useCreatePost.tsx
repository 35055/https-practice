import baseApi from "../api/base-api";

const useCreatePost = () => {
  const handleCreate = async (name: string, body: string) => {
    const data = await baseApi.post("posts", {
      title: name,
      body: body,
    });
    console.log(data);
  };

  return {
    handleCreate,
  };
};

export default useCreatePost;
