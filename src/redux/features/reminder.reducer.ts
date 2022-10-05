import { createSlice } from "@reduxjs/toolkit";

type ReminderState = {
    value: boolean;
    reminderDate: number;
};

export const reminderSlice = createSlice({
    name: "reminder",
    initialState: {
        value: false,
        reminderDate: 0,
    },
    reducers: {
        setReminderState: (state: ReminderState, action) => {
            state.value = action.payload;
        },
        unsetReminder: (state: ReminderState) => {
            state.reminderDate = 0;
        },
        setReminder: (state: ReminderState, action) => {
            state.reminderDate = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setReminderState, unsetReminder, setReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
