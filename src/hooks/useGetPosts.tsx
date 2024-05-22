import { useEffect, useState } from "react";
import baseApi from "../api/base-api";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true);
      const data = await baseApi.get("posts");
      setPosts(data);
      setIsLoading(false);
    };

    fecthData();
  }, []);

  return {
    posts,
    isLoading,
  };
};

export default useGetPosts;
