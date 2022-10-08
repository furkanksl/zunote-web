import { createSlice } from "@reduxjs/toolkit";
import Note from "../../models/Note.model";
import VoiceNote from "../../models/VoiceNote.model";

// //! DUMMY NOTE DATAS
// const textNotes: Note[] = [
//     new Note({
//         category: "Cat1",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",

//         reminder: 0,
//     }),
//     new Note({
//         category: "Cat2",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",

//         reminder: 0,
//     }),
//     new Note({
//         category: "Cat3",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//         reminder: 0,
//     }),
//     new Note({
//         category: "Cat4",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//         reminder: 0,
//     }),
//     new Note({
//         category: "Cat5",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//         reminder: 0,
//     }),
//     new Note({
//         category: "Cat6",
//         createdAt: 0,
//         noteText:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//         reminder: 0,
//     }),
// ];

// const voiceNotes: VoiceNote[] = [
//     new VoiceNote({
//         category: "Cat1",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "00:10",
//             },
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "01:10",
//             },
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "01:14",
//             },
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "01:45",
//             },
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "01:45",
//             },
//             {
//                 createdAt: 0,
//                 noteText:
//                     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum fugiat quibusdam sit quidem a deleniti quam culpa beatae corrupti, reiciendis consequatur, esse distinctio eius, mollitia veniam ullam doloremque at!",
//                 time: "01:45",
//             },
//         ],
//     }),
//     new VoiceNote({
//         category: "Cat2",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             { createdAt: 0, noteText: "adasdasd", time: "00:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:14" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:45" },
//         ],
//     }),
//     new VoiceNote({
//         category: "Cat3",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             { createdAt: 0, noteText: "adasdasd", time: "00:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:14" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:45" },
//         ],
//     }),
//     new VoiceNote({
//         category: "Cat4",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             { createdAt: 0, noteText: "adasdasd", time: "00:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:14" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:45" },
//         ],
//     }),
//     new VoiceNote({
//         category: "Cat5",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             { createdAt: 0, noteText: "adasdasd", time: "00:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:14" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:45" },
//         ],
//     }),
//     new VoiceNote({
//         category: "Cat6",
//         createdAt: 0,
//         reminder: 0,
//         voiceUrl: "http",
//         notes: [
//             { createdAt: 0, noteText: "adasdasd", time: "00:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:10" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:14" },
//             { createdAt: 0, noteText: "adasdasd", time: "01:45" },
//         ],
//     }),
// ];

const allNotes: any = []; // [...textNotes, ...voiceNotes];

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
