import React from "react";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: string;
};
function NoteCard(props: Props) {
    return (
        <div className={styles["note-card"]}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent function={() => {}} />
            </div>
            <div className={styles["details"]}>
                <p>{props.createdAt}</p>
            </div>
        </div>
    );
}

export default NoteCard;
