import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "tokenController",
  initialState,
  reducers: {
    handleToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { token, handleToken } = tokenSlice.actions;

export default tokenSlice.reducer;
