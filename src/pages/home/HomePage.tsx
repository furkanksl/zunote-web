import React, { useState } from "react";

import { addNewNote } from "../../redux/features/note.reducer";
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../../redux/store/store";
import VoiceNote, { TimedNote } from "../../models/VoiceNote.model";

import Note from "../../models/Note.model";
import JustAdded from "./components/JustAdded";
import InputField from "./components/InputField";

import styles from "./HomePage.module.scss";
import { toast } from "react-toastify";

function HomePage() {
    const dispatch = useDispatch();

    const [savedVoiceNotes, setSavedVoiceNotes] = useState<TimedNote[]>([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);
    const [justAddedNotes, setJustAddedNotes] = useState<Note[] | TimedNote[]>([]);

    const voiceNoteLapTime = useSelector((state: StateModel) => state.recorder.lapTime);
    const isVoiceNote = useSelector((state: StateModel) => state.recorder.isRecording);

    function saveNote(inputValue: string) {
        if (inputValue === "") {
            toast.error("Please fill the text field before saving the note!");
            return;
        }

        const createdAt = new Date().getTime();

        if (isVoiceNote) {
            setSavedVoiceNotes([
                ...savedVoiceNotes,
                {
                    time: voiceNoteLapTime ?? "00:00",
                    createdAt: createdAt,
                    noteText: inputValue,
                },
            ]);

            setJustAddedNotes(
                [
                    ...savedVoiceNotes,
                    {
                        time: voiceNoteLapTime ?? "00:00",
                        createdAt: createdAt,
                        noteText: inputValue,
                    },
                ].reverse()
            );
        } else {
            const newNote = new Note({
                category: "",
                createdAt: createdAt,
                noteText: inputValue,
                reminder: "0",
            });

            setSavedNotes([...savedNotes, newNote]);
            setJustAddedNotes([...savedNotes, newNote].reverse());

            dispatch(addNewNote(newNote));
        }
    }

    function saveVoiceRecord() {
        const createdAt = new Date().getTime();

        const newVoiceNote: VoiceNote = new VoiceNote({
            category: "",
            createdAt: createdAt,
            notes: savedVoiceNotes,
            reminder: "0",
            voiceUrl: "",
        });

        dispatch(addNewNote(newVoiceNote));
        setSavedVoiceNotes([]);
    }

    return (
        <div className={styles["home-page-wrapper"]}>
            <JustAdded list={justAddedNotes} />
            <InputField onSave={saveNote} onVoiceRecord={saveVoiceRecord} />
        </div>
    );
}
export default HomePage;
