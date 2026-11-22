import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isSearchOpen: false,
        languageSelected: 'en'
    },
    reducers: {
        toggleSearch: (state, action) => {
            console.log(state.isSearchOpen);
            state.isSearchOpen = !state.isSearchOpen;
        },
        selectLanguage: (state, action) => {
            state.languageSelected = action.payload;
        }
    }
})

export const { toggleSearch, selectLanguage } = gptSlice.actions;

export default gptSlice.reducer;