import baseApi from "../api/base-api";

const useDeletePost = (id: string) => {
  const handleDelete = async () => {
    const data = await baseApi.delete(`posts/${id}`);
    console.log(data);
  };

  return {
    handleDelete,
  };
};

export default useDeletePost;
