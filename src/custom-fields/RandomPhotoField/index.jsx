import React from "react";
import PropTypes from "prop-types";
import RandomPhoto from "components/RandomPhoto";

RandomPhotoField.propTypes = {
  form: PropTypes.object,
};

function RandomPhotoField(props) {
  const { form, field, label } = props;
  //   truyền cái name để tiện cho việc setFieldValue và set id của các Input Field
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <RandomPhoto
      name={name}
      label={label}
      imageUrl={value !== undefined ? value : undefined}
      onImageUrlChange={handleImageUrlChange}
      onRandomButtonBlur={onBlur}
      showError={showError}
      errorMessage={errors[name]}
    />
  );
}

export default RandomPhotoField;
