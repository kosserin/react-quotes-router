import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
        status: 'loading',
        text: 'loading data',
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotificationState,
    reducers: {
        changeNotification(state, action) {
            state.status = action.payload.status;
            state.text = action.payload.text;
        }
    }
})

export default notificationSlice