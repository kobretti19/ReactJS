import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const createUserSlice = createSlice({
  name: "createUser", //ova sekogas treba da ni e unique !!!!
  initialState,
  reducers: {
    handleChangeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    handleChangeLastName: (state, action) => {
      state.lastName = action.payload;
    },
    handleChangeEmail: (state, action) => {
      state.email = action.payload;
    },
    handleChangePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeEmail,
  handleChangePassword,
} = createUserSlice.actions;

export default createUserSlice.reducer;
