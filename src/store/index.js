import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quote-state";
import notificationSlice from "./notification";
import commentSlice from './comment-state';

const store = configureStore({
    reducer: {
        quote: quoteSlice.reducer,
        notification: notificationSlice.reducer,
        comment: commentSlice.reducer,
    }
})

export default store;

export const quoteActions = quoteSlice.actions;
export const notificationActions = notificationSlice.actions;
export const commentActions = commentSlice.actions;