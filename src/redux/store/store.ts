import { Action, AnyAction, configureStore, Reducer, ThunkAction } from "@reduxjs/toolkit";
import categoryReducer from "../features/category.reducer";
import noteReducer from "../features/note.reducer";
import reminderReducer from "../features/reminder.reducer";
import { createWrapper } from "next-redux-wrapper";

type ReducerModel = {
    reminder: Reducer<any, AnyAction>;
    category: Reducer<any, AnyAction>;
    note: Reducer<any, AnyAction>;
};

const reducer: ReducerModel = {
    reminder: reminderReducer,
    category: categoryReducer,
    note: noteReducer,
};

const makeStore = () =>
    configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
            });
        },
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
