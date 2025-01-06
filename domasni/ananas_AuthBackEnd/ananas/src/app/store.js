import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthProvider";
import basketReducer from "./basketSlice";
import favouriteReducer from "./favouriteSlice";
import tokenReducer from "./CheckToken";

export default configureStore({
  reducer: {
    authController: authReducer,
    basket: basketReducer,
    favourite: favouriteReducer,
    tokenController: tokenReducer,
  },
});
