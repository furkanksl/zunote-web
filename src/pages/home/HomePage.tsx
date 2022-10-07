import { useEffect, useState } from "react";

import { addNewNote, setNotes } from "../../redux/features/note.reducer";
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../../redux/store/store";
import { setReminder } from "../../redux/features/reminder.reducer";
import { setSelectedCategory } from "../../redux/features/category.reducer";
import VoiceNote, { TimedNote } from "../../models/VoiceNote.model";
import { toast } from "react-toastify";
import { AudioData } from "voice-recorder-react/lib";

import Note from "../../models/Note.model";
import JustAdded from "./components/JustAdded";
import InputField from "./components/InputField";

import styles from "./HomePage.module.scss";
import AwsService from "../../services/aws.service";
import FirebaseService from "../../services/firebase/firebase.service";
import { auth } from "../../../firebase";
import { setUserData } from "../../redux/features/user.reducer";
import UtilityService from "../../services/utility.service";

function HomePage() {
    const dispatch = useDispatch();

    const awsService = new AwsService();
    const firebaseService = new FirebaseService();
    const utilityService = new UtilityService();

    const [savedVoiceNotes, setSavedVoiceNotes] = useState<TimedNote[]>([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);
    const [justAddedNotes, setJustAddedNotes] = useState<Note[] | TimedNote[]>([]);

    const voiceNoteLapTime = useSelector((state: StateModel) => state.recorder.lapTime);
    const isVoiceNote = useSelector((state: StateModel) => state.recorder.isRecording);
    const selectedCategory = useSelector((state: StateModel) => state.category.selectedCategory);
    const reminderDate = useSelector((state: StateModel) => state.reminder.reminderDate);

    useEffect(() => {
        new Promise(async () => {
            dispatch(setUserData(await firebaseService.getUserData()));
            let notes = await firebaseService.getAllNotes();
            const voiceNotesUrls = await awsService.getVoiceRecords();
            notes = utilityService.appendVoiceUrlsToVoiceNotes(notes, voiceNotesUrls);
            dispatch(setNotes(notes.reverse()));
        });
    }, []);

    async function saveNote(inputValue: string) {
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
                id: createdAt.toString(),
                category: selectedCategory ?? "",
                createdAt: createdAt,
                noteText: inputValue,
                reminder: reminderDate ?? 0,
                isVoiceNote: false,
            });

            await firebaseService.saveNote(newNote);

            setSavedNotes([...savedNotes, newNote]);
            setJustAddedNotes([...savedNotes, newNote].reverse());

            dispatch(addNewNote(newNote));
            dispatch(setReminder(0));
            dispatch(setSelectedCategory(""));
        }
    }

    async function saveVoiceRecord(data: AudioData) {
        const createdAt = new Date().getTime();

        awsService.upload(`${createdAt}`, "audio/mpeg", data.blob);

        const newVoiceNote: VoiceNote = new VoiceNote({
            id: createdAt.toString(),
            category: selectedCategory ?? "",
            createdAt: createdAt,
            notes: savedVoiceNotes,
            reminder: reminderDate,
            voiceUrl: data.url,
            isVoiceNote: true,
            duration: voiceNoteLapTime,
        });

        firebaseService.saveNote(newVoiceNote);

        newVoiceNote.voiceUrl = data.url;
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
