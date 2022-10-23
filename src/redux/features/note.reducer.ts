import { createSlice } from "@reduxjs/toolkit";
import Note from "models/Note.model";
import VoiceNote from "models/VoiceNote.model";

const allNotes: any = [];

type NoteState = {
    notes: any[];
    isNoteEditing: boolean;
    notesTabIndex: number;
    selectedNote?: Note | VoiceNote;
    selectedNoteIndex: number;
};

export const noteSlice = createSlice({
    name: "note",

    initialState: {
        notes: allNotes, //[],
        isNoteEditing: false,
        selectedNote: undefined,
        selectedNoteIndex: 0,
        notesTabIndex: 0,
    },

    reducers: {
        setNotes: (state: NoteState, action: any) => {
            state.notes = [...action.payload];
        },

        addNewNote: (state: NoteState, action: any) => {
            state.notes.splice(0, 0, action.payload);
            state.notes = [...state.notes];
        },

        removeNoteWithIndex: (state: NoteState) => {
            state.notes.splice(state.selectedNoteIndex, 1);
            state.notes = [...state.notes];
        },

        updateNoteWithIndex: (state: NoteState, action: any) => {
            state.notes[state.selectedNoteIndex] = action.payload;
            state.notes = [...state.notes];
        },

        setIsNoteEditing: (state: NoteState, action: any) => {
            state.isNoteEditing = action.payload;
        },

        setSelectedNoteIndex: (state: NoteState, action: any) => {
            state.selectedNoteIndex = action.payload;
        },

        setSelectedNote: (state: NoteState, action: any) => {
            state.selectedNote = action.payload;
        },

        setNotesTabIndex: (state: NoteState, action: any) => {
            state.notesTabIndex = action.payload;
        },
    },
});

export const {
    addNewNote,
    removeNoteWithIndex,
    setSelectedNote,
    updateNoteWithIndex,
    setSelectedNoteIndex,
    setIsNoteEditing,
    setNotesTabIndex,
    setNotes,
} = noteSlice.actions;

export default noteSlice.reducer;
