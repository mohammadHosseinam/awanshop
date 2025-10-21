import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idOfProduct : "",
    title: "",
    desc: "",
    rate : 0
};

const createComment = createSlice({
  name: "createComment",
  initialState,
  reducers: {
    setCreateComment: (state, action) => {
        return action.payload;
    }
  },
});

export const {  setCreateComment } = createComment.actions;
export default createComment.reducer;