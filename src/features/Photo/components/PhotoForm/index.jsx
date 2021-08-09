import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import React from "react";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./styles.scss";

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const selectOption = PHOTO_CATEGORY_OPTIONS;
  console.log(selectOption);
  return (
    <Form className="photo-form">
      <div className="photo-form__content">
        <FormGroup>
          <Label for="tittlId">Title</Label>
          <Input name="title" id="titleId" placeholder="eg: Wow nature" />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Category</Label>
          <Select
            id="categoryId"
            name="categoryId"
            placeholder="What's your photo category?"
            isMulti
            options={selectOption}
          />
        </FormGroup>

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
}

export default PhotoForm;
