import { useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../context/dataContext";

const getPosts = async (currentPage) => {
  const posts = await axios.get(
    `https://dummyjson.com/posts?limit=8&skip=${(currentPage - 1) * 8}`
  );
  console.log("I am getPosts", posts);
  return posts.data.posts;
};

const useGetPosts = () => {
  //custom hook
  const { currentPage, dispatch } = useContext(MyContext);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("I am current page in useEffect", currentPage);
      const updatedPost = await getPosts(currentPage);
      if (updatedPost && updatedPost.length > 0) {
        dispatch({ type: "SET_POSTS", payload: updatedPost });
      }
    };
    fetchPosts();
  }, [currentPage, dispatch]);
};

export default useGetPosts;
