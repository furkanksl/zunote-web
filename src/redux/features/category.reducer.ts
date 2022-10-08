import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type CategoryState = {
    isSorting: boolean;
    selectedCategory: string;
    sortingCategory: string;
    categories: string[];
};

let categories = ["Education", "Shopping", "Temp"];

export const categorySlice = createSlice({
    name: "category",

    initialState: {
        isSorting: false,
        selectedCategory: "",
        sortingCategory: "All",
        categories: categories,
    },

    reducers: {
        setCategories: (state: CategoryState, action: any) => {
            state.categories = action.payload;
            state.categories = [...state.categories];
        },

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
            state.categories = [...state.categories];
        },

        removeCategoryWithIndex: (state: CategoryState, action: any) => {
            const index: number = action.payload;
            state.categories.splice(index, 1);
            state.categories = [...state.categories];
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
    setCategories,
} = categorySlice.actions;

export default categorySlice.reducer;
