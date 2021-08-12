import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard";

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoRemoveClick: null,
  onPhotoEditClick: null,
};

function PhotoList(props) {
  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;
  return (
    <Row style={{ marginTop: "3rem" }}>
      {photoList.map((photo, i) => {
        return (
          <Col key={i} xs="12" md="6" lg="3">
            <PhotoCard
              photo={photo}
              onPhotoEditClick={onPhotoEditClick}
              onPhotoRemoveClick={onPhotoRemoveClick}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default PhotoList;
