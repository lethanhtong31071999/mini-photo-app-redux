import React from "react";
import { Button, Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos.list);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditClick = (photo) => {
    const editPhotourl = `/photos/${photo.id}`;
    history.push(editPhotourl);
  };

  const handleRemoveClick = (photo) => {
    dispatch(removePhoto(photo.id));
  };

  return (
    <div className="photo-main">
      <Banner backgroundUrl={Images.BLACK_BG} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Container className="text-center">
          <Link to="/photos/add">
            <Button className="photo-main__btn">Add new Photo</Button>
          </Link>
        </Container>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEditClick}
          onPhotoRemoveClick={handleRemoveClick}
        />
      </div>
    </div>
  );
}

export default MainPage;
