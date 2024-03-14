import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import loginReducer from "./login";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
