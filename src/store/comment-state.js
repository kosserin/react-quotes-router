import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = {
    comments: [],
    isChanged: false,
}

const commentSlice = createSlice({
    name: 'comment',
    initialState: initialCommentState,
    reducers: {
        addComment (state, action) {
            state.comments = state.comments.concat(action.payload)
        },
        replaceComments(state, action) {
            state.comments = action.payload;
        },
    }
})

export default commentSlice;