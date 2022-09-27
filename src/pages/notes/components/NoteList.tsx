import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../../../models/Note.model";
import VoiceNote from "../../../models/VoiceNote.model";
import { setSelectedCategory } from "../../../redux/features/category.reducer";
import { setSelectedNote } from "../../../redux/features/note.reducer";
import { setReminder } from "../../../redux/features/reminder.reducer";
import { StateModel } from "../../../redux/store/store";

import styles from "../NotesPage.module.scss";
import NoteCard from "./NoteCard";
import VoiceNoteCard from "./VoiceNoteCard";

function NoteList() {
    const dispatch = useDispatch();
    const router = useRouter();

    const sortingCat = useSelector((state: StateModel) => state.category.sortingCategory);

    const categoryIndex = useSelector((state: StateModel) => state.note.notesTabIndex);
    const notes = useSelector((state: StateModel) => state.note.notes);
    const sortedNotes = sortingCat === "All" ? notes : notes.filter((note: Note) => note.category === sortingCat);

    const selectNote = async (index: number) => {
        // console.log(notes[index] instanceof VoiceNote);
        // console.log(index);

        dispatch(setSelectedNote(notes[index]));
        dispatch(setReminder(notes[index].reminder));
        dispatch(setSelectedCategory(notes[index].category));
        await router.push("/note-detail");
    };

    function noteCard(note: any, index: number) {
        return note instanceof VoiceNote ? (
            categoryIndex === 0 ? (
                <VoiceNoteCard
                    key={index}
                    noteText={note.notes[0]?.noteText ?? ""}
                    createdAt={note.createdAt}
                    voiceUrl={note.voiceUrl}
                    onClick={() => selectNote(index)}
                />
            ) : null
        ) : categoryIndex === 1 ? (
            <NoteCard
                key={index}
                noteText={note?.noteText ?? ""}
                createdAt={note.createdAt}
                onClick={() => selectNote(index)}
            />
        ) : null;
    }

    return (
        <div className={styles["cards"]}>
            {notes.map((note: VoiceNote | Note, index: number) =>
                sortingCat === "All"
                    ? noteCard(note, index)
                    : note.category === sortingCat
                    ? noteCard(note, index)
                    : null
            )}
        </div>
    );
}

export default NoteList;
