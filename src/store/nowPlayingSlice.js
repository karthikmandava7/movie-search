import { createSlice } from "@reduxjs/toolkit";

const nowPlaySlice = createSlice({
  name: "nowPlaying",
  initialState: {
    nowPlaying: null,
  },
  reducers: {
    addNowPlayMovies: (state, actions) => {
      state.nowPlaying = actions.payload;
    },
  },
});

export const { addNowPlayMovies } = nowPlaySlice.actions;

export default nowPlaySlice.reducer;
