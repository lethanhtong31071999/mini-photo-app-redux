import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import PropTypes from "prop-types";
import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import "./styles.scss";
import SelectField from "custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    category: {},
  };

  return (
    <Formik initialValues={initialValues}>
      {function (formikProps) {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form className="photo-form">
            <div className="photo-form__content">
              <FastField
                // props: form, field, atributes are declared here
                name="title"
                // component={(props) => InputField(props)}
                component={InputField}
                // Belonging to component
                label="Title"
                placeholder="eg: Wow nature"
              />

              <FastField
                name="category"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div>
                  <img
                    className="photo-form__img"
                    src="https://vnrealty.com.vn/wp-content/uploads/2020/03/placeholder.png"
                    alt="colorful"
                  />
                </div>

                <div>
                  <Button outline color="primary">
                    Random a photo
                  </Button>
                </div>
              </FormGroup>
            </div>

            <FormGroup>
              <Button className="photo-form__btn" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
