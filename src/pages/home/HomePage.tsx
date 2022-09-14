import React, { useState } from "react";

import { addNewNote } from "../../redux/features/note.reducer";
import { useDispatch, useSelector } from "react-redux";
import Note from "../../models/Note.model";
import JustAdded from "./components/JustAdded";
import InputField from "./components/InputField";
import VoiceNote, { TimedNote } from "../../models/VoiceNote.model";

import styles from "../../styles/home.module.scss";
import { StateModel } from "../../redux/store/store";
import { setIsNewRecordRecorder } from "../../redux/features/recorder.reducer";

function HomePage() {
    const dispatch = useDispatch();

    const [savedVoiceNotes, setSavedVoiceNotes] = useState<TimedNote[]>([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);
    const [justAddedNotes, setJustAddedNotes] = useState<Note[] | TimedNote[]>([]);

    const voiceNoteLapTime = useSelector((state: StateModel) => state.recorder.lapTime);
    const isVoiceNote = useSelector((state: StateModel) => state.recorder.isRecording);
    const isNewRecordRecorded = useSelector((state: StateModel) => state.recorder.isNewRecordRecorded);

    function saveNote(inputValue: string) {
        const createdAt = Date.now().toString();

        if (isNewRecordRecorded) {
            const newVoiceNote: VoiceNote = new VoiceNote({
                category: "",
                createdAt: createdAt,
                notes: savedVoiceNotes,
                reminder: "0",
                voiceUrl: "",
            });

            dispatch(addNewNote(newVoiceNote));
            dispatch(setIsNewRecordRecorder(false));
            setSavedVoiceNotes([]);
        }

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
            // console.log(justAddedNotes);

            dispatch(addNewNote(newNote));
        }
    }

    return (
        <div className={styles["home-page-wrapper"]}>
            <JustAdded list={justAddedNotes} />
            <InputField onSave={saveNote} />
        </div>
    );
}
export default HomePage;
