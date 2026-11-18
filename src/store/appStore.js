import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";
import loaderReducer from "./loaderSlice";
import nowPlayReducer from "./nowPlayingSlice";
const appStore = configureStore({
  reducer: {
    user: userInfoReducer,
    loader: loaderReducer,
    nowPlaying: nowPlayReducer,
  },
});

export default appStore;
