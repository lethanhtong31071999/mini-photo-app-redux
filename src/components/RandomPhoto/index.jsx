import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Button, FormGroup, Label } from "reactstrap";
RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
  label: PropTypes.string,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  label: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
  const randomNumber = Math.ceil(Math.random() * 2000);
  return `https://picsum.photos/id/${randomNumber}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, label } = props;

  const handleRandomPhotoClick = (e) => {
    const newImageUrl = getRandomImageUrl();
    onImageUrlChange(newImageUrl);
  };

  const handleOnErrorImage = () => {
    const newImageUrl = getRandomImageUrl();
    onImageUrlChange(newImageUrl);
  };

  return (
    <FormGroup>
      {label ? <Label for="categoryId">{label}</Label> : null}
      <div>
        <img
          className="photo-form__img"
          src={
            imageUrl ||
            "https://vnrealty.com.vn/wp-content/uploads/2020/03/placeholder.png"
          }
          onError={handleOnErrorImage}
          alt="Opps....Can't get any pictures."
        />
      </div>

      <div>
        <Button
          outline
          color="primary"
          type="submit"
          onClick={handleRandomPhotoClick}
          name={name}
        >
          Pick a picture
        </Button>
      </div>
    </FormGroup>
  );
}

export default RandomPhoto;
