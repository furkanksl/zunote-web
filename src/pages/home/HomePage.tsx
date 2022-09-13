import React, { useEffect, useRef, useState } from "react";

import { useRecorder } from "voice-recorder-react";

import { useDispatch } from "react-redux";
import Note from "../../models/Note.model";
import VoiceNote from "../../models/VoiceNote.model";
import { addNewNote } from "../../redux/features/note.reducer";
import styles from "../../styles/home.module.scss";
import Recorder from "./components/Recorder";
import JustAdded from "./components/JustAdded";
import InputField from "./components/InputField";

function HomePage() {
    const dispatch = useDispatch();

    const [isVoiceNote, setIsVoiceNote] = useState(false);
    const [savedVoiceNotes, setSavedVoiceNotes] = useState([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);

    function saveNote(inputValue: string) {
        const createdAt = Date.now().toString();

        if (isVoiceNote) {
        } else {
            const newNote = new Note({
                category: "",
                createdAt: createdAt,
                noteText: inputValue,
                reminder: "0",
            });

            setSavedNotes([...savedNotes, newNote].reverse());

            dispatch(addNewNote(newNote));
        }
    }

    return (
        <div className={styles["home-page-wrapper"]}>
            <JustAdded list={savedNotes} />
            <InputField onSave={saveNote} />
        </div>
    );
}
export default HomePage;
