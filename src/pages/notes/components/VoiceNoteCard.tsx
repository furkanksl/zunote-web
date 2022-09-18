import React, { useState } from "react";
import MiniPlaySvgComponent from "../../../../components/Svg/MiniPlaySvg";
import MiniPauseSvgComponent from "../../../../components/Svg/MiniResumeSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";

import styles from "../NotesPage.module.scss";
type Props = {
    noteText: string;
    createdAt: string;
    voiceUrl: string;
};
function VoiceNoteCard(props: Props) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={styles["voice-card"]}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent function={() => {}} />
            </div>
            <div className={styles["details"]}>
                {isPlaying ? (
                    <MiniPauseSvgComponent function={() => setIsPlaying(false)} />
                ) : (
                    <MiniPlaySvgComponent function={() => setIsPlaying(true)} />
                )}
                <p>{props.createdAt}</p>
            </div>
        </div>
    );
}

export default VoiceNoteCard;
