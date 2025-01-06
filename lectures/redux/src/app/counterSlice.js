/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter", //ova sekogas treba da ni e unique !!!!
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
