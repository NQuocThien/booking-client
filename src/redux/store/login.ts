import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLogin = true;
      console.log("test data: ", action.payload);
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
