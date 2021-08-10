import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  disabled: false,
  label: "",
  placeholder: "",
  isMulti: false,
  options: [],
};

function SelectField(props) {
  const { form, field, label, disabled, placeholder, isMulti, options } = props;
  const { name, value, onChange, onBlur } = field;

  // Ham nay chay lai vi khi field thay doi se render lại hết
  const showSelection = options.find(function (option) {
    return option.value === value;
  });
  console.log("showSelection", showSelection);

  function handleSelectedOptionChange(selectedOption) {
    if (selectedOption) {
      const changeEvent = {
        target: {
          name: name,
          value: selectedOption.value,
        },
      };
      field.onChange(changeEvent);
    }
  }

  console.log("value", value);

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        placeholder={placeholder}
        isMulti={isMulti}
        isDisabled={disabled}
        options={options}
        noOptionsMessage={() => `No option for ${label}`}
        // Formik
        name={name}
        onChange={(selectedOption) =>
          handleSelectedOptionChange(selectedOption)
        }
        onBlur={onBlur}
        value={showSelection || undefined}
      />
    </FormGroup>
  );
}

export default SelectField;
