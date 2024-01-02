import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    logInlogout: (state, actions) => {
      state.isLogin = actions.payload;
    },
  },
});

export const { logInlogout } = authSlice.actions;
export default authSlice.reducer;
