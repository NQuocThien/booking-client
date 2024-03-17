// clientReduce.ts
import { Language } from "@/assets/contains/item-interface";
import { User } from "@/graphql/webbooking-service.generated";
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
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.inforUser = action.payload;
    },
  },
});

export const {
  /* Tên các reducers */
  login,
  logout,
  setLanguage,
  setUserInfo,
} = clientSlice.actions;

export default clientSlice.reducer;
