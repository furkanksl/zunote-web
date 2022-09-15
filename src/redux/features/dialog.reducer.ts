import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: "dialog",

    initialState: {
        isCategoryVisible: false,
        isAddCategoryVisible: false,
        isDeleteVisible: false,
    },

    reducers: {
        setIsCategoryVisible: (state, action) => {
            state.isCategoryVisible = action.payload;
        },
        setIsAddCategoryVisible: (state, action) => {
            state.isAddCategoryVisible = action.payload;
        },
        setIsDeleteVisible: (state, action) => {
            state.isDeleteVisible = action.payload;
        },
        resetDialogs: (state) => {
            state.isCategoryVisible = false;
            state.isCategoryVisible = false;
            state.isDeleteVisible = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsCategoryVisible, setIsAddCategoryVisible, setIsDeleteVisible, resetDialogs } = dialogSlice.actions;

export default dialogSlice.reducer;
