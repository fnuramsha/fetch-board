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
      if (updatedSinglePost) {
        setSinglePostVal(updatedSinglePost);
      }
    };
    fetchSinglePost();
  }, []);

  return (
    <div>
      {singlePostVal ? (
        <>
          <h1>{singlePostVal.title}</h1>
          <p>{singlePostVal.body}</p>
          <p>
            <strong>Views:</strong> {singlePostVal.views}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Post;
