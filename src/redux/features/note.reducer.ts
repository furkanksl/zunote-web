import { createSlice } from "@reduxjs/toolkit";
import Note from "../../models/Note.model";
import VoiceNote from "../../models/VoiceNote.model";

//! DUMMY NOTE DATAS
const textNotes: Note[] = [
    new Note({
        category: "Cat1",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
    new Note({
        category: "Cat2",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
    new Note({
        category: "Cat3",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
    new Note({
        category: "Cat4",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
    new Note({
        category: "Cat5",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
    new Note({
        category: "Cat6",
        createdAt: "asdsd",
        noteText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
        reminder: "0",
    }),
];

const voiceNotes: VoiceNote[] = [
    new VoiceNote({
        category: "Cat1",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "00:10",
            },
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "01:10",
            },
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "01:14",
            },
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "01:45",
            },
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "01:45",
            },
            {
                createdAt: "a",
                noteText:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
                time: "01:45",
            },
        ],
    }),
    new VoiceNote({
        category: "Cat2",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            { createdAt: "a", noteText: "adasdasd", time: "00:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:14" },
            { createdAt: "a", noteText: "adasdasd", time: "01:45" },
        ],
    }),
    new VoiceNote({
        category: "Cat3",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            { createdAt: "a", noteText: "adasdasd", time: "00:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:14" },
            { createdAt: "a", noteText: "adasdasd", time: "01:45" },
        ],
    }),
    new VoiceNote({
        category: "Cat4",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            { createdAt: "a", noteText: "adasdasd", time: "00:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:14" },
            { createdAt: "a", noteText: "adasdasd", time: "01:45" },
        ],
    }),
    new VoiceNote({
        category: "Cat5",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            { createdAt: "a", noteText: "adasdasd", time: "00:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:14" },
            { createdAt: "a", noteText: "adasdasd", time: "01:45" },
        ],
    }),
    new VoiceNote({
        category: "Cat6",
        createdAt: "asdsd",
        reminder: "0",
        voiceUrl: "http",
        notes: [
            { createdAt: "a", noteText: "adasdasd", time: "00:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:10" },
            { createdAt: "a", noteText: "adasdasd", time: "01:14" },
            { createdAt: "a", noteText: "adasdasd", time: "01:45" },
        ],
    }),
];

const allNotes = [...textNotes, ...voiceNotes];

type NoteState = {
    isVoiceNote: boolean;
    notes: any[];
    isNoteEditing: boolean;
    selectedNote?: Note | VoiceNote;
    selectedNoteIndex: number;
    voiceTimerText: string;
};

export const noteSlice = createSlice({
    name: "note",

    initialState: {
        isVoiceNote: false,
        notes: allNotes,
        isNoteEditing: false,
        selectedNote: undefined,
        selectedNoteIndex: 0,
        voiceTimerText: "00:00",
    },

    reducers: {
        setIsVoiceNote: (state: NoteState, action: any) => {
            state.isVoiceNote = action.payload;
        },

        setVoiceTimerText: (state: NoteState, action: any) => {
            state.voiceTimerText = action.payload;
        },

        addNewNote: (state: NoteState, action: any) => {
            state.notes.splice(0, 0, action.payload);
        },

        addNewVoiceNote: (state: NoteState, action: any) => {
            state.notes.splice(0, 0, action.payload);
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
    },
});

export const {
    setIsVoiceNote,
    addNewNote,
    removeNoteWithIndex,
    addNewVoiceNote,
    setSelectedNote,
    updateNoteWithIndex,
    setSelectedNoteIndex,
    setIsNoteEditing,
    setVoiceTimerText,
} = noteSlice.actions;

export default noteSlice.reducer;
