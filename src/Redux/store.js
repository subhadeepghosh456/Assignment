import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    loginlogout: authSlice,
    cartinfo: cartSlice,
  },
});

export default store;
