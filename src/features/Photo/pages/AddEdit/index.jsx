import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";

AddEdit.propTypes = {};

function AddEdit(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo!" />

      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default AddEdit;
