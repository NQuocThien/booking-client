// clientReduce.ts
import { Language } from "@/assets/contains/item-interface";
import { User } from "@/graphql/webbooking-service.generated";
import { checkExToken, removeToken } from "@/utils/tools";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientState {
  // Định nghĩa kiểu của trạng thái
  isLogin: boolean;
  language: Language;
  inforUser: User | undefined;
}

const initialState: ClientState = {
  // Khởi tạo trạng thái ban đầu
  isLogin: false,
  inforUser: undefined,
  language: {
    code: "vn",
    name: "Tiếng Việt",
  },
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    // Định nghĩa các reducers
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      removeToken();
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
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

export const {
  /* Tên các reducers */
  login,
  logout,
  setLanguage,
  setUserInfo,
  checkExpToken,
} = clientSlice.actions;

export default clientSlice.reducer;
