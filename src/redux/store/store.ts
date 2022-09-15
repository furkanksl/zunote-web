import { Action, AnyAction, configureStore, Reducer, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import categoryReducer from "../features/category.reducer";
import noteReducer from "../features/note.reducer";
import reminderReducer from "../features/reminder.reducer";
import recorderReducer from "../features/recorder.reducer";
import dialogReducer from "../features/dialog.reducer";

export type StateModel = {
    reminder: any;
    category: any;
    note: any;
    recorder: any;
    dialog: any;
};

const reducer: StateModel = {
    reminder: reminderReducer,
    category: categoryReducer,
    note: noteReducer,
    recorder: recorderReducer,
    dialog: dialogReducer,
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
