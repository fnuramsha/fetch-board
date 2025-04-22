import { useContext, useEffect } from "react";
import { MyContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import PostImage from "./Images/postImage.jpg";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { singlePost, dispatch } = useContext(MyContext);
  const { id } = useParams();

  const getSinglePosts = async (id) => {
    const singlePost = await axios.get(`https://dummyjson.com/posts/${id}`);
    console.log("I am single Post", singlePost.data);
    return singlePost.data;
  };

  useEffect(() => {
    const fetchSinglePost = async () => {
      const updatedSinglePost = await getSinglePosts(id);
      if (updatedSinglePost) {
        dispatch({ type: "SET_SINGLEPOSTS", payload: updatedSinglePost });
      }
    };
    fetchSinglePost();
  }, [id, dispatch]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh", // Full screen height
        width: "100vw",
        backgroundImage: `url(${PostImage})`,
        backgroundSize: "cover", // Cover the whole screen
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // White with 70% opacity
        backgroundBlendMode: "overlay", // Blends color + image to give transparent effect
        backgroundPosition: "center",
      }}
    >
      <Card
        style={{
          width: "70rem",
          height: "20rem",
          border: "3px solid #ccc",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <div className="d-flex">
            <Card.Title>Post Information</Card.Title>
            <Link to="/" className="ms-auto link-dark">
              Back
            </Link>
          </div>
          <Card.Text>
            <b>Post Title: </b> <br /> {singlePost?.title} <br /> <br />
            <b>Post Body:</b> {singlePost?.body} <br /> <br />
            <b>Views: {singlePost?.views} </b> <br />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Post;
