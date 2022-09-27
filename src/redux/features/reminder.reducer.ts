import { createSlice } from "@reduxjs/toolkit";

export const reminderSlice = createSlice({
    name: "reminder",
    initialState: {
        value: false,
        reminderDate: 0,
    },
    reducers: {
        setReminderState: (state, action) => {
            state.value = action.payload;
        },
        unsetReminder: (state) => {
            state.reminderDate = 0;
        },
        setReminder: (state, action) => {
            state.reminderDate = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setReminderState, unsetReminder, setReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
