import { createSlice } from "@reduxjs/toolkit";

const nowPlaySlice = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlaying: null,
    previewMovie: null
  },
  reducers: {
    addNowPlayMovies: (state, actions) => {
      state.nowPlaying = actions.payload;
    },
    addPreviewMovie: (state, actions) => {
      state.previewMovie = actions.payload;
    }
  },
});

export const { addNowPlayMovies, addPreviewMovie } = nowPlaySlice.actions;

export default nowPlaySlice.reducer;
