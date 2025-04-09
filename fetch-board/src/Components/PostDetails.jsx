import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import PostImage from "./Images/postImage.jpg";
import Card from "react-bootstrap/Card";

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
    <div
      style={{
        minHeight: "100vh", // Full screen height
        width: "100vw",
        backgroundImage: `url(${PostImage})`,
        backgroundSize: "cover", // Cover the whole screen
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // White with 70% opacity
        backgroundBlendMode: "overlay", // Blends color + image to give transparent effect
        backgroundPosition: "center",
        // flex: 1,
        backgroundsize: "150px",
        // position: "fixed",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Post Information</Card.Title> <br />
          <Card.Text>
            <b>Post Title: </b> <br /> {singlePost?.title} <br /> <br />
            <b>Post Body:</b> {singlePost?.body} <br /> <br />
            <b>Views: {singlePost?.views} </b> <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Post;
