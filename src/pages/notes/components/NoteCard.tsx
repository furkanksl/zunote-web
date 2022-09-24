import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsDeleteVisible } from "../../../redux/features/dialog.reducer";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: string;
    onClick: () => any;
};
function NoteCard(props: Props) {
    const dispatch = useDispatch();

    const deleteItem = (event: any) => {
        dispatch(setIsDeleteVisible(true));

        event.stopPropagation();
    };

    return (
        <div className={styles["note-card"]} onClick={props.onClick}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent function={deleteItem} />
            </div>
            <div className={styles["details"]}>
                <p>{props.createdAt}</p>
            </div>
        </div>
    );
}

export default NoteCard;
