import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";
import loaderReducer from "./loaderSlice";

const appStore = configureStore({
  reducer: { user: userInfoReducer, loader: loaderReducer },
});

export default appStore;
