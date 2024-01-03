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
  },
});
export const { addItems, calculateTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
