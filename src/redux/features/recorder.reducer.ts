import { createSlice } from "@reduxjs/toolkit";

export const recorderSlice = createSlice({
    name: "recorder",
    initialState: {
        isRecording: false,
        lapTime: "00:00",
        isNewRecordRecorded: false,
    },
    reducers: {
        setIsRecording: (state, action) => {
            state.isRecording = action.payload;
        },
        resetLapTime: (state) => {
            state.lapTime = "00:00";
        },
        setLapTime: (state, action) => {
            state.lapTime = action.payload;
        },
        setIsNewRecordRecorder: (state, action) => {
            state.isNewRecordRecorded = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsRecording, resetLapTime, setLapTime, setIsNewRecordRecorder } = recorderSlice.actions;

export default recorderSlice.reducer;
