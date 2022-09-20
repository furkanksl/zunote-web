import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsDeleteVisible } from "../../../redux/features/dialog.reducer";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: string;
};
function NoteCard(props: Props) {
    const dispatch = useDispatch();

    const deleteItem = () => dispatch(setIsDeleteVisible(true));

    return (
        <Link href={"/note-detail"}>
            <div className={styles["note-card"]}>
                <div className={styles["note-text"]}>
                    <p>{props.noteText}</p>
                    <RemoveSvgComponent function={deleteItem} />
                </div>
                <div className={styles["details"]}>
                    <p>{props.createdAt}</p>
                </div>
            </div>
        </Link>
    );
}

export default NoteCard;
