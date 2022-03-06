import { createSlice } from "@reduxjs/toolkit";

const initialQuoteState = {
    quotes: [],
    changed: false,
}

const quoteSlice = createSlice({
    name: 'quote',
    initialState: initialQuoteState,
    reducers: {
        addQuote(state, action) {
            state.quotes = state.quotes.concat(action.payload);
            state.changed = true;
        },
        replaceQuotes(state, action) {
            state.quotes = action.payload;
        },
    }
})

export default quoteSlice;