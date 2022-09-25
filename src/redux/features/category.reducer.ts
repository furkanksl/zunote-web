import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type CategoryState = {
    isCategoryOpened: boolean;
    selectedCategory: string;
    isNewCategoryAdding: boolean;
    categories: string[];
};

//! this will be fetched from api
let categories = [
    "Cat1",
    "Cat2",
    "Cat3",
    "Cat4",
    "Cat5",
    "Cat6",
    "Cat3",
    "Cat4",
    "Cat5",
    "Cat6",
    "Cat3",
    "Cat4",
    "Cat5",
    "Cat6",
    "Cat3",
    "Cat4",
    "Cat5",
    "Cat6",
]; //! will be deleted

export const categorySlice = createSlice({
    name: "category",

    initialState: {
        isCategoryOpened: false,
        selectedCategory: "",
        isNewCategoryAdding: false,
        categories: categories,
    },

    reducers: {
        toggleCategory: (state: CategoryState) => {
            state.isCategoryOpened = !state.isCategoryOpened;
        },

        setCategoryState: (state: CategoryState, action: any) => {
            state.isCategoryOpened = action.payload;
        },

        unselectCategory: (state: CategoryState) => {
            state.selectedCategory = "";
        },

        setSelectedCategory: (state: CategoryState, action: any) => {
            state.selectedCategory = action.payload;
        },

        setIsNewCategoryAdding: (state: CategoryState, action: any) => {
            state.isNewCategoryAdding = action.payload;
        },

        addNewCategory: (state: CategoryState, action: any) => {
            let isAlreadyAdded = state.categories.some((cat: string) => cat == action.payload);

            if (isAlreadyAdded) {
                toast.error("This category already added!");
                return;
            }

            state.categories.splice(0, 0, action.payload);
        },

        removeCategoryWithIndex: (state: CategoryState, action: any) => {
            const index: number = action.payload;
            state.categories.splice(index, 1);
        },
    },
});

export const {
    toggleCategory,
    setCategoryState,
    unselectCategory,
    setSelectedCategory,
    setIsNewCategoryAdding,
    addNewCategory,
    removeCategoryWithIndex,
} = categorySlice.actions;

export default categorySlice.reducer;
