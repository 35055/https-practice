import baseApi from "../api/base-api";

const useEditPost = (id: string) => {
  const handleEdit = async (name: string, body: string) => {
    const data = await baseApi.put(`posts/${id}`, {
      title: name,
      body: body,
    });

    console.log(data);
  };

  return {
    handleEdit,
  };
};

export default useEditPost;
