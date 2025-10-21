import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import OTPcode from "./slices/OTPcode";
import OTPphoneNumber from "./slices/OTPphoneNumber";
import createComment from "./slices/createComment";
import CreateOrderSlice from "./slices/CreateOrderSlice";
import linkedSizes from "./slices/linkedSizes";

const store = configureStore({
  reducer: {
    auth: authReducer,
    OTPcode: OTPcode,
    OTPphoneNumber: OTPphoneNumber,
    createComment: createComment,
    CreateOrderSlice: CreateOrderSlice,
    linkedSizes : linkedSizes,
  },
});

export default store;