import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userSlice";
import loaderReducer from "./loaderSlice";
import nowPlayReducer from "./nowPlayingSlice";
import gptSearchReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userInfoReducer,
    loader: loaderReducer,
    nowPlaying: nowPlayReducer,
    gptSearch: gptSearchReducer
  },
});

export default appStore;
