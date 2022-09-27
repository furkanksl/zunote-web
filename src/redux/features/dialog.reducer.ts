import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: "dialog",

    initialState: {
        isCategoryVisible: false,
        isAddCategoryVisible: false,
    },

    reducers: {
        setIsCategoryVisible: (state, action) => {
            state.isCategoryVisible = action.payload;
        },
        setIsAddCategoryVisible: (state, action) => {
            state.isAddCategoryVisible = action.payload;
        },
        resetDialogs: (state) => {
            state.isCategoryVisible = false;
            state.isCategoryVisible = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsCategoryVisible, setIsAddCategoryVisible, resetDialogs } = dialogSlice.actions;

export default dialogSlice.reducer;
