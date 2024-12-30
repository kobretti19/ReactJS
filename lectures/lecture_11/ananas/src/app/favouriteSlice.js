import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  showCart: false,
};

export const favoriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity;
      } else {
        state.items.push({
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          description: action.payload.description,
          id: action.payload.id,
          quantity: 1,
        });
      }
    },
    removeFromFavourite: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      } else {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
      }
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
