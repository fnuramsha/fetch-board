import { useContext } from "react";
import { MyContext } from "../context/dataContext";
import axios from "axios";

const GetPost = () => {
  // const {currentPage} = useContext(MyContext)
  const getPosts = async (currentPage) => {
    const posts = await axios.get(
      `https://dummyjson.com/posts?limit=8&skip=${(currentPage - 1) * 8}`
    );
    return posts.data.posts;
  };
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
export default GetPost;
