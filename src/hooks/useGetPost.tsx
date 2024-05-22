import { useEffect, useState } from "react";
import baseApi from "../api/base-api";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useGetPost = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true);
      const data = await baseApi.get(`posts/${id}`);
      setPost(data);
      setIsLoading(false);
    };

    fecthData();
  }, [id]);

  return {
    post,
    isLoading,
  };
};

export default useGetPost;
