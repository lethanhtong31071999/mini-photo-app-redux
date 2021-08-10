import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  // Belonging to Formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  // Belonging to Input
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  disabled: false,
};

function InputField(props) {
  // field and form belong to Formik
  const { field, form, label, placeholder, type, disabled } = props;
  const { name, value, onChange, onBlur } = field;

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        // formik
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FormGroup>
  );
}

export default InputField;
