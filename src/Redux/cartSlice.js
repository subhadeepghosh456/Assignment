import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
    },
    calculateTotalAmount: (state) => {
      state.totalAmount = state.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    },
    clearCart: (state, actions) => {
      state.items = [];
      state.totalAmount = actions.payload;
    },
  },
});
export const { addItems, calculateTotalAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
