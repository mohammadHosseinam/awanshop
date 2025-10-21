import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const linkedSizes = createSlice({
  name: "linkedSizes",
  initialState,
  reducers: {
    setLinkedSizes: (state, action) => {
        return action.payload;
    }
  },
});

export const {  setLinkedSizes } = linkedSizes.actions;
export default linkedSizes.reducer;