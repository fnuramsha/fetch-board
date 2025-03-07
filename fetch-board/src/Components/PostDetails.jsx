import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const Post = () => {
  const { getSinglePosts, singlePostVal, setSinglePostVal } =
    useContext(MyContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      const updatedSinglePost = await getSinglePosts(id);
      setSinglePostVal(updatedSinglePost);
    };
    fetchSinglePost();
  }, [id]);

  return (
    <div>
      <h4>Post Information: </h4>

      <p>
        <b> Post Title : </b>
        {singlePostVal?.data?.title}
      </p>
      <p>
        <b>Post Body: </b>
        {singlePostVal?.data?.body}
      </p>
      <p>
        {" "}
        <b>Views: </b>
        {singlePostVal?.data?.views}
      </p>
    </div>
  );
};
export default Post;
