import { createSlice } from '@reduxjs/toolkit';

export const authorSlice = createSlice({
    name: 'author',
    initialState: {
        author: '',
        authors: [],
    },
    reducers: {
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
        setAuthors: (state, action) => {
            state.authors = action.payload;
        },
    },
});

export const { setAuthor , setAuthors } = authorSlice.actions;

export default authorSlice.reducer;