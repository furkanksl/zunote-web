import React from "react";
import { useSelector } from "react-redux";
import Note from "../../../models/Note.model";
import VoiceNote from "../../../models/VoiceNote.model";
import { StateModel } from "../../../redux/store/store";

import styles from "../NotesPage.module.scss";
import NoteCard from "./NoteCard";
import VoiceNoteCard from "./VoiceNoteCard";

function NoteList() {
    const categoryIndex = useSelector((state: StateModel) => state.note.notesTabIndex);
    const notes = useSelector((state: StateModel) => state.note.notes);

    return (
        <div className={styles["cards"]}>
            {notes.map((note: VoiceNote | Note, index: number) => {
                return note instanceof VoiceNote ? (
                    categoryIndex === 0 ? (
                        <VoiceNoteCard
                            key={index}
                            noteText={note.notes[0].noteText ?? ""}
                            createdAt={note.createdAt}
                            voiceUrl={note.voiceUrl}
                        />
                    ) : null
                ) : categoryIndex === 1 ? (
                    <NoteCard key={index} noteText={note.noteText} createdAt={note.createdAt} />
                ) : null;
            })}
        </div>
    );
}

export default NoteList;
