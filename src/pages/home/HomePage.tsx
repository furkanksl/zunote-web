import React, { useEffect, useRef, useState } from "react";

import { useRecorder } from "voice-recorder-react";

import { useDispatch } from "react-redux";
import AddSvgCompoenent from "../../../components/Svg/AddSvg";
import CategorySvgComponent from "../../../components/Svg/CategorySvg";
import MicSvgComponent from "../../../components/Svg/MicSvg";
import PauseSvgComponent from "../../../components/Svg/PauseSvg";
import PlaySvgComponent from "../../../components/Svg/PlaySvg";
import ReminderSvgComponent from "../../../components/Svg/ReminderSvg";
import StopSvgComponent from "../../../components/Svg/StopSvg";
import Note from "../../models/Note.model";
import VoiceNote from "../../models/VoiceNote.model";
import { addNewNote } from "../../redux/features/note.reducer";
import styles from "../../styles/home.module.scss";

function HomePage() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [isVoiceNote, setIsVoiceNote] = useState(false);
    const [savedVoiceNotes, setSavedVoiceNotes] = useState([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);

    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const { time, data, stop, start, pause, paused, resume, recording } = useRecorder();

    useEffect(() => {
        if (data.url && audioRef.current) {
            audioRef.current.src = data.url;
        }
    }, [data?.url]);

    // eslint-disable-next-line
    const convertFileToBase64 = (file: any) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.mediaBlobUrl);

            reader.onload = () =>
                resolve({
                    fileName: file.title,
                    base64: reader.result,
                });
            reader.onerror = reject;
        });

    function handleMessageChange(event: any) {
        setInputValue(event.target.value);
    }

    function saveNote() {
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

        setInputValue("");
    }

    function startVoiceRecording() {
        start();
        setIsActive(true);
        setIsStarted(true);
        // dispatch(setIsVoiceNote(true));
    }

    function pauseVoiceRecording() {
        pause();
        setIsActive(false);
    }

    function resumeVoiceRecording() {
        resume();
        setIsActive(true);
    }

    function stopVoiceRecording() {
        stop();
        // Save voice not here
        setIsActive(false);
        setIsStarted(false);
        // dispatch(setIsVoiceNote(false));
    }

    const togglePlay = () => {
        if (audioRef.current?.paused) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    };

    return (
        <div className={styles["home-page-wrapper"]}>
            <div className={styles["just-added-container"]}>
                <div className={styles["title-box"]}>
                    <p>JUST ADDED</p>
                    {/* <p>{window.screen.availWidth}</p> */}
                </div>
                <div className={styles["note-container"]}>
                    {savedNotes?.map((noteItem: Note | VoiceNote, index: number) => {
                        return (
                            <div key={index} className={styles["note-card"]}>
                                <p>{noteItem instanceof Note ? noteItem?.noteText : noteItem?.notes[0]?.noteText}</p>
                            </div>
                        );
                    })}

                    {/* <div className={styles["voice-note-card"]}>
                        <p className={styles.lap}></p>
                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit.</p>
                    </div> */}
                </div>
            </div>
            <div className={styles["input-container"]}>
                <div className={styles["property-field"]}>
                    <div className={styles.category}>
                        <CategorySvgComponent function={() => {}} />
                        <p>Category 1</p>
                    </div>
                    <div className={styles.reminder}>
                        <p>18:00 Aug 18 2022</p>
                        <ReminderSvgComponent function={() => {}} />
                    </div>
                </div>
                <div className={styles.textfield}>
                    <textarea
                        placeholder="Type something..."
                        rows={5}
                        value={inputValue}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>

                <div className={styles["buttons-container"]}>
                    <div className={styles["voice-buttons-container"]}>
                        {isStarted ? (
                            isActive ? (
                                <PauseSvgComponent function={pauseVoiceRecording} />
                            ) : (
                                <PlaySvgComponent function={resumeVoiceRecording} />
                            )
                        ) : (
                            <MicSvgComponent function={startVoiceRecording} />
                        )}
                        {isStarted ? (
                            <div className="time-details">
                                <span className="minute">{time.m}</span>
                                <span>:</span>
                                <span className="second">{time.s}</span>
                            </div>
                        ) : null}
                        {isStarted ? <StopSvgComponent function={stopVoiceRecording} /> : null}
                    </div>
                    <AddSvgCompoenent function={saveNote} />
                </div>
                {/* <button type="button" onClick={togglePlay} style={{ margin: "10px" }}>
                    Play/Pause
                </button>
                <audio ref={audioRef} hidden /> */}
            </div>
        </div>
    );
}
export default HomePage;
