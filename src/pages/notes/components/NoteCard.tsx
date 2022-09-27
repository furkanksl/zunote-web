import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteDialog from "../../../../components/Dialogs/Delete/DeleteDialog";

import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { removeNoteWithIndex, setSelectedNoteIndex } from "../../../redux/features/note.reducer";
import UtilityService from "../../../services/utility.service";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: number;
    onClick: (event: any) => any;
    index: number;
};
function NoteCard(props: Props) {
    const dispatch = useDispatch();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const utilityService = new UtilityService();

    const deleteItem = (event: any) => {
        setIsDeleteVisible(true);
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

            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={() => {
                        dispatch(removeNoteWithIndex());
                    }}
                    onCancel={() => setIsDeleteVisible(false)}
                />
            ) : null}
        </div>
    );
}

export default NoteCard;
