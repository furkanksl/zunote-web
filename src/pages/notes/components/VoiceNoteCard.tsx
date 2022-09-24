import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MiniPlaySvgComponent from "../../../../components/Svg/MiniPlaySvg";
import MiniPauseSvgComponent from "../../../../components/Svg/MiniResumeSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsDeleteVisible } from "../../../redux/features/dialog.reducer";

import styles from "../NotesPage.module.scss";
type Props = {
    noteText: string;
    createdAt: string;
    voiceUrl: string;
    onClick: () => any;
};
function VoiceNoteCard(props: Props) {
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);

    const deleteItem = () => dispatch(setIsDeleteVisible(true));

    return (
        <Link href={"/note-detail"}>
            <div className={styles["voice-card"]} onClick={props.onClick}>
                <div className={styles["note-text"]}>
                    <p>{props.noteText}</p>
                    <RemoveSvgComponent function={deleteItem} />
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
        </Link>
    );
}

export default VoiceNoteCard;
