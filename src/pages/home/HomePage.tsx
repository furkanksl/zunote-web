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
import { setReminder } from "../../redux/features/reminder.reducer";
import { setSelectedCategory } from "../../redux/features/category.reducer";

function HomePage() {
    const dispatch = useDispatch();

    const [savedVoiceNotes, setSavedVoiceNotes] = useState<TimedNote[]>([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);
    const [justAddedNotes, setJustAddedNotes] = useState<Note[] | TimedNote[]>([]);

    const voiceNoteLapTime = useSelector((state: StateModel) => state.recorder.lapTime);
    const isVoiceNote = useSelector((state: StateModel) => state.recorder.isRecording);
    const selectedCategory = useSelector((state: StateModel) => state.category.selectedCategory);
    const reminderDate = useSelector((state: StateModel) => state.reminder.reminderDate);

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
                category: selectedCategory ?? "",
                createdAt: createdAt,
                noteText: inputValue,
                reminder: reminderDate ?? 0,
            });

            setSavedNotes([...savedNotes, newNote]);
            setJustAddedNotes([...savedNotes, newNote].reverse());

            dispatch(addNewNote(newNote));
            dispatch(setReminder(0));
            dispatch(setSelectedCategory(""));
        }
    }

    function saveVoiceRecord() {
        const createdAt = new Date().getTime();

        const newVoiceNote: VoiceNote = new VoiceNote({
            category: selectedCategory ?? "",
            createdAt: createdAt,
            notes: savedVoiceNotes,
            reminder: reminderDate,
            voiceUrl: "",
        });

        dispatch(addNewNote(newVoiceNote));
        setSavedVoiceNotes([]);
        dispatch(setReminder(0));
        dispatch(setSelectedCategory(""));
    }

    return (
        <div className={styles["home-page-wrapper"]}>
            <JustAdded list={justAddedNotes} />
            <InputField onSave={saveNote} onVoiceRecord={saveVoiceRecord} />
        </div>
    );
}
export default HomePage;
