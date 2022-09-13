import React from "react";
import Note from "../../../models/Note.model";
import VoiceNote from "../../../models/VoiceNote.model";

import styles from "../../../styles/home.module.scss";

type Props = {
    list: VoiceNote[] | Note[];
};
function JustAdded(props: Props) {
    return (
        <div className={styles["just-added-container"]}>
            <div className={styles["title-box"]}>
                <p>JUST ADDED</p>
            </div>
            <div className={styles["note-container"]}>
                {props.list?.map((noteItem: Note | VoiceNote, index: number) => {
                    return noteItem instanceof Note ? (
                        <div key={index} className={styles["note-card"]}>
                            <p>{noteItem?.noteText}</p>
                        </div>
                    ) : (
                        <div className={styles["voice-note-card"]}>
                            <p className={styles.lap}>{noteItem?.notes[0]?.time}</p>
                            <p>{noteItem?.notes[0]?.noteText}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default JustAdded;
