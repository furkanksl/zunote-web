import React from "react";

import styles from "../NotesPage.module.scss";
import NoteCard from "./NoteCard";
import VoiceNoteCard from "./VoiceNoteCard";

function NoteList() {
    return (
        <div className={styles["cards"]}>
            <VoiceNoteCard />
            <NoteCard />
        </div>
    );
}

export default NoteList;
