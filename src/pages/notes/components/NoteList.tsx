import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../../../models/Note.model";
import VoiceNote from "../../../models/VoiceNote.model";
import { setSelectedNote } from "../../../redux/features/note.reducer";
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
        dispatch(setSelectedNote(notes[index]));
        await router.push("/note-detail");
    };

    return (
        <div className={styles["cards"]}>
            {sortedNotes.map((note: VoiceNote | Note, index: number) => {
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
            })}
        </div>
    );
}

export default NoteList;
