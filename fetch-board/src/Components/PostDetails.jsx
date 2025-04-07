import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import BackgroundImage from "./Images/background-image.jpg";

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
    <Container
      fluid
      className="d-flex justify-content-start"
      style={{
        minHeight: "100vh", // Full screen height
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover", // Cover the whole screen
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White with 70% opacity
        backgroundBlendMode: "overlay", // Blends color + image to give transparent effect
      }}
    >
      <div className="text-center">
        <h4>Post Information:</h4>
        <p>
          <b>Post Title:</b> {singlePost?.title}
        </p>
        <p>
          <b>Post Body:</b> {singlePost?.body}
        </p>
        <p>
          <b>Views:</b> {singlePost?.views}
        </p>
      </div>
    </Container>
  );
};
export default Post;
