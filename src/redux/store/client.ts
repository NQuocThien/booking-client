// clientReduce.ts
"use client";
import { languages } from "@/assets/contains/emun";
import { Language } from "@/assets/contains/item-interface";
import { User } from "@/graphql/webbooking-service.generated";
import { checkExToken, removeToken, setLocalStorage } from "@/utils/tools";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientState {
  isLogin: boolean;
  language: Language;
  inforUser: User | undefined;
}

const initialState: ClientState = {
  isLogin: false,
  inforUser: undefined,
  language: languages[0],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      removeToken();
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      setLocalStorage(
        process.env.NEXT_PUBLIC_LANGUAGE || "language",
        action.payload.code
      );
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.inforUser = action.payload;
    },

    checkExpToken: (state) => {
      if (!checkExToken()) {
        logout();
      }
    },
  },
});

export const { login, logout, setLanguage, setUserInfo, checkExpToken } =
  clientSlice.actions;

export default clientSlice.reducer;
