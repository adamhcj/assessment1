import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../reduxSlice/authorSlice';

export default configureStore({
    reducer: {
        author: authorReducer,
    },
});