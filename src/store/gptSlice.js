import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isSearchOpen: false,
    languageSelected: "en",
    movieList: null,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    selectLanguage: (state, action) => {
      state.languageSelected = action.payload;
    },
    setMovieResults: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { toggleSearch, selectLanguage, setMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
