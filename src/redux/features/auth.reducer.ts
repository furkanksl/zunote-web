import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../../firebase";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: auth?.currentUser ?? null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
