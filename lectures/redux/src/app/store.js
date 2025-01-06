import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import createUserReducer from "./createUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    createUser: createUserReducer,
  },
});
