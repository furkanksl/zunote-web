import React from "react";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";

import styles from "../NotesPage.module.scss";

function NoteCard() {
    return (
        <div className={styles["note-card"]}>
            <div className={styles["note-text"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis molest.</p>
                <RemoveSvgComponent function={() => {}} />
            </div>
            <div className={styles["details"]}>
                <p>12 Aug 2022 08:07</p>
            </div>
        </div>
    );
}

export default NoteCard;
