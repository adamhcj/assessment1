import { createSlice } from '@reduxjs/toolkit';

export const authorSlice = createSlice({
    name: 'author',
    initialState: {
        author: '',
    },
    reducers: {
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
    },
});

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;