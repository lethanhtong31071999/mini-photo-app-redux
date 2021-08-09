import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import "./styles.scss";

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
