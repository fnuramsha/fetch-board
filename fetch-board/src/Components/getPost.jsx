import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import axios from "axios";
import { useEffect } from "react";

const GetPost = () => {
  const { currentPage, dispatch } = useContext(MyContext);

  const getPosts = async (currentPage) => {
    const posts = await axios.get(
      `https://dummyjson.com/posts?limit=8&skip=${(currentPage - 1) * 8}`
    );
    console.log("I am getPosts", posts);
    return posts.data.posts;
  };

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

export default GetPost;
