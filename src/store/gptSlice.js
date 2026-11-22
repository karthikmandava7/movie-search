import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isSearchOpen: false
    },
    reducers: {
        toggleSearch: (state, action) => {
            console.log(state.isSearchOpen);
            state.isSearchOpen = !state.isSearchOpen;
        }
    }
})

export const { toggleSearch } = gptSlice.actions;

export default gptSlice.reducer;