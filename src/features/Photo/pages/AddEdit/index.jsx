import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./styles.scss";

AddEdit.propTypes = {};

function getPhoto(idPhoto, listPhoto) {
  const result = listPhoto.find(
    (photo) => idPhoto.toString() === photo.id.toString()
  );
  return result;
}

function AddEdit(props) {
  const photos = useSelector((state) => state.photos.list);
  const dispatch = useDispatch();
  const history = useHistory();
  const paramUrl = useParams();

  const { photoId } = paramUrl;
  const isAddMode = photoId ? false : true;

  const currentPhoto = isAddMode ? null : getPhoto(photoId, photos);

  const initialValues =
    isAddMode && currentPhoto
      ? {
          title: "",
          categoryId: null,
          randomImageUrl: "",
        }
      : {
          title: currentPhoto.title,
          categoryId: currentPhoto.categoryId,
          randomImageUrl: currentPhoto.randomImageUrl,
        };

  const handleOnSubmit = (value) => {
    console.log("Form Submit: ", value);

    setTimeout(() => {
      if (isAddMode) {
        const action = addPhoto(value);
        dispatch(action);
      } else {
        const photoObject = { ...value, id: photoId };
        const action = updatePhoto(photoObject);
        dispatch(action);
      }
      history.push("/photos");
    }, 2000);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo!" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={(value) => handleOnSubmit(value)}
        />
      </div>
    </div>
  );
}

export default AddEdit;
