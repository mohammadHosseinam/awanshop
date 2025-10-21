import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "",
    phoneNumber: "",
    postCode: "",
    address : "",
    basket : []
};

const CreateOrderSlice = createSlice({
  name: "CreateOrderSlice",
  initialState,
  reducers: {
    setCreateOrderSlice: (state, action) => {
        return action.payload;
    }
  },
});

export const {  setCreateOrderSlice } = CreateOrderSlice.actions;
export default CreateOrderSlice.reducer;