import { createSlice } from "@reduxjs/toolkit";
import { listDefaultPhotos } from "./defaultListPhoto";

const photoSlice = createSlice({
  // Ten goi cua Reducer nay
  name: "photo",
  initialState: {
    list: [...listDefaultPhotos],
    otherwise: null,
  },
  reducers: {
    // Ten cua cac ham xu ly action
    addPhoto: (state, action) => {
      state["list"].push(action.payload);
    },

    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      state["list"] = state["list"].filter(
        (photo) => photo.id !== removePhotoId
      );
    },
    updatePhoto: (state, action) => {
      // payload la 1 photo moi (Obj)
      const newPhoto = action.payload;
      const newPhotoIndex = state["list"].findIndex(
        (photo) => photo.id.toString() === newPhoto.id.toString()
      );
      if (newPhotoIndex >= 0) {
        state["list"][newPhotoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photoSlice;

export const { addPhoto, removePhoto, updatePhoto } = actions;

// export default photoReducer
export default reducer;
