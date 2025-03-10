import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const Post = () => {
  const { getSinglePosts, singlePost, dispatch } = useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      const updatedSinglePost = await getSinglePosts(id);
      if (updatedSinglePost) {
        dispatch({ type: "SET_SINGLEPOSTS", payload: updatedSinglePost });
      }
    };
    fetchSinglePost();
  }, [id]);

  return (
    <div>
      <h4>Post Information: </h4>

      <p>
        <b> Post Title : </b>
        {singlePost?.title}
      </p>
      <p>
        <b>Post Body: </b>
        {singlePost?.body}
      </p>
      <p>
        {" "}
        <b>Views: </b>
        {singlePost?.views}
      </p>
    </div>
  );
};
export default Post;
