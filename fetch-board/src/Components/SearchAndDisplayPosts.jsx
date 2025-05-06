import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/dataContext";

const postImages = [
  "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-photo/woman-working-from-home-laptop_53876-132032.jpg?semt=ais_hybrid",
  "https://sm.pcmag.com/t/pcmag_au/news/a/asus-websi/asus-website-lists-laptop-with-intels-first-dedicated-graphi_r4yj.1200.jpg",
  "https://freerangestock.com/sample/167975/laptop-with-blue-website-homepage-on-the-screen.jpg",
  "https://cdn.create.vista.com/api/media/small/448994714/stock-photo-unrecognizable-man-working-home",
  "https://burst.shopifycdn.com/photos/designer-picking-colors-for-website.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_640.jpg",
  "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?cs=srgb&dl=pexels-andrew-2312369.jpg&fm=jpg",
];

const SearchAndDisplayPosts = () => {
  const { posts, searchField } = useContext(MyContext);

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchField)
  );

  return (
    <>
      <Row>
        {" "}
        {filteredPosts.map((post, index) => (
          <Col sm={3} key={index}>
            <div className="holder">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  alt="Card image cap"
                  src={postImages[index]}
                  style={{ height: "200px" }}
                />
                <Card.Body style={{ height: "200px" }}>
                  <Card.Title className="fw-bold text-center">
                    Post:{post.id}{" "}
                  </Card.Title>
                  <Card.Text>
                    Title: {post.title}
                    Views: {post.views}{" "}
                  </Card.Text>
                  <Link to={`/post/${post.id}`} className="link-dark">
                    Post Details
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}{" "}
      </Row>
    </>
  );
};

export default SearchAndDisplayPosts;
