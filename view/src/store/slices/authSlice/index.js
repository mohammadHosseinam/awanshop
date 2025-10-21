import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  firstName: "",
  lastName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { phoneNumber, firstName, lastName } = action.payload;
      state.phoneNumber = phoneNumber;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    setOtpSent: (state, action) => {
      state.isOtpSent = action.payload;
    },
    resetAuth: () => initialState,
  },
});

export const { setUserInfo, setOtpSent, resetAuth } = authSlice.actions;
export default authSlice.reducer;
