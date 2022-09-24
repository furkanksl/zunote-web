import React from "react";
import Note from "../../../models/Note.model";
import VoiceNote, { TimedNote } from "../../../models/VoiceNote.model";

import styles from "../HomePage.module.scss";

type Props = {
    list: TimedNote[] | Note[];
};
function JustAdded(props: Props) {
    return (
        <div className={styles["just-added-container"]}>
            {props.list.length === 0 ? null : (
                <div className={styles["title-box"]}>
                    <p>JUST ADDED</p>
                </div>
            )}
            <div className={styles["note-container"]}>
                {props.list?.map((noteItem: Note | TimedNote, index: number) => {
                    return noteItem instanceof Note ? (
                        <div key={index} className={styles["note-card"]}>
                            <p>{noteItem?.noteText}</p>
                        </div>
                    ) : (
                        <div key={index} className={styles["voice-note-card"]}>
                            <p className={styles.lap}>{noteItem?.time}</p>
                            <p>{noteItem?.noteText}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default JustAdded;
