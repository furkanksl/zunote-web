import React, { useState } from "react";
import MiniPlaySvgComponent from "../../../../components/Svg/MiniPlaySvg";
import MiniPauseSvgComponent from "../../../../components/Svg/MiniResumeSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";

import styles from "../NotesPage.module.scss";

function VoiceNoteCard() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={styles["voice-card"]}>
            <div className={styles["note-text"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis molest.</p>
                <RemoveSvgComponent function={() => {}} />
            </div>
            <div className={styles["details"]}>
                {isPlaying ? (
                    <MiniPauseSvgComponent function={() => setIsPlaying(false)} />
                ) : (
                    <MiniPlaySvgComponent function={() => setIsPlaying(true)} />
                )}
                <p>12 Aug 2022 08:07</p>
            </div>
        </div>
    );
}

export default VoiceNoteCard;
