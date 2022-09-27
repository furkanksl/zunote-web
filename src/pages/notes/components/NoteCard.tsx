import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsDeleteVisible } from "../../../redux/features/dialog.reducer";
import { setSelectedNoteIndex } from "../../../redux/features/note.reducer";
import UtilityService from "../../../services/utility.service";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: number;
    onClick: () => any;
    index: number;
};
function NoteCard(props: Props) {
    const dispatch = useDispatch();

    const utilityService = new UtilityService();

    const deleteItem = (event: any) => {
        dispatch(setIsDeleteVisible(true));
        dispatch(setSelectedNoteIndex(props.index));
        event.stopPropagation();
    };

    return (
        <div className={styles["note-card"]} onClick={props.onClick}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent function={deleteItem} />
            </div>
            <div className={styles["details"]}>
                <p>{utilityService.timestampToString(props.createdAt)}</p>
            </div>
        </div>
    );
}

export default NoteCard;
