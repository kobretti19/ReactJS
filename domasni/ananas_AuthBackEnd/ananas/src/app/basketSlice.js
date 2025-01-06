import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  showCart: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          description: action.payload.description,
          totalPrice: action.payload.totalPrice,
          id: action.payload.id,
          quantity: 1,
        });
      }
    },
    removeFromCard: (state, action) => {
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

export const { addToBasket, removeFromCard } = basketSlice.actions;

export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.totalPrice, 0);

export default basketSlice.reducer;
