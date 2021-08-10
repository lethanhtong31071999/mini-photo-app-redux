import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

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
  const { touched, errors } = form;
  const showError = errors[name] && touched[name];

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
        invalid={showError}
      />
      {showError ? <FormFeedback>{errors[name]}</FormFeedback> : null}
    </FormGroup>
  );
}

export default InputField;
