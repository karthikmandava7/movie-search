import { createSlice } from "@reduxjs/toolkit";
import {
  NOW_PLAYING,
  POPULAR_LIST,
  TOP_RATED,
} from "../utils/serviceConstants";

const nowPlaySlice = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlaying: null,
    previewMovie: null,
    popularList: null,
    topRated: null,
  },
  reducers: {
    addNowPlayMovies: (state, actions) => {
      if (actions.payload?.category === NOW_PLAYING) {
        state.nowPlaying = actions.payload?.json;
      }
      if (actions.payload?.category === POPULAR_LIST) {
        state.popularList = actions.payload?.json;
      }
      if (actions.payload?.category === TOP_RATED) {
        state.topRated = actions.payload?.json;
      }
    },
    addPreviewMovie: (state, actions) => {
      state.previewMovie = actions.payload;
    },
  },
});

export const { addNowPlayMovies, addPreviewMovie } = nowPlaySlice.actions;

export default nowPlaySlice.reducer;
