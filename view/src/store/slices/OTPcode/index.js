import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const OTPcode = createSlice({
  name: "OTPcode",
  initialState,
  reducers: {
    setOtpSent: (state, action) => {
        return action.payload;
    }
  },
});

export const {  setOtpSent } = OTPcode.actions;
export default OTPcode.reducer;