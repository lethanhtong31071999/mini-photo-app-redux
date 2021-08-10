import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import "./styles.scss";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function PhotoForm(props) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    randomImageUrl: Yup.string().when("categoryId", {
      is: null,
      then: Yup.string().notRequired(),
      otherwise: Yup.string().required("This field is required"),
    }),
  });

  const initialValues = {
    title: "",
    categoryId: null,
    randomImageUrl: "",
  };

  const handleSubmit = (value) => {
    console.log("submit: ", value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(value) => handleSubmit(value)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
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
                name="categoryId"
                component={SelectField}
                label="Category"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FastField
                name="randomImageUrl"
                component={RandomPhotoField}
                label="Picture"
              />
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
