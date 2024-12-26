import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthProvider";

export default configureStore({
  reducer: {
    authController: authReducer,
  },
});
