import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.scss";
import Banner from "components/Banner";
import Images from "constants/images";

MainPage.propTypes = {};

function MainPage(props) {
  console.log(Images.BLACK_BG);
  return (
    <div className="photo-main">
      <Banner backgroundUrl={Images.BLACK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">
          <Button className="photo-main__btn">Add new Photo</Button>
        </Link>
      </Container>
    </div>
  );
}

export default MainPage;
