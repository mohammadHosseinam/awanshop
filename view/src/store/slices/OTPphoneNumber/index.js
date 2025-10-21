import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const OTPphoneNumber = createSlice({
  name: "OTPphoneNumber",
  initialState,
  reducers: {
    setOtpNumber: (state, action) => {
        return action.payload;
    }
  },
});

export const {  setOtpNumber } = OTPphoneNumber.actions;
export default OTPphoneNumber.reducer;