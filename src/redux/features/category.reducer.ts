import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type CategoryState = {
    isSorting: boolean;
    selectedCategory: string;
    sortingCategory: string;
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
        isSorting: false,
        selectedCategory: "",
        sortingCategory: "All",
        categories: categories,
    },

    reducers: {
        unselectCategory: (state: CategoryState) => {
            state.selectedCategory = "";
        },

        setSelectedCategory: (state: CategoryState, action: any) => {
            state.selectedCategory = action.payload;
        },

        setSortingCategory: (state: CategoryState, action: any) => {
            state.sortingCategory = action.payload;
        },

        setIsSorting: (state: CategoryState, action: any) => {
            state.isSorting = action.payload;
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
    unselectCategory,
    setSelectedCategory,
    setSortingCategory,
    setIsSorting,
    addNewCategory,
    removeCategoryWithIndex,
} = categorySlice.actions;

export default categorySlice.reducer;
