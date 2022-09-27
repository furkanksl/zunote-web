import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AudioPlayer from "react-h5-audio-player";
import DeleteDialog from "../../../../components/Dialogs/Delete/DeleteDialog";
import DeleteSvgComponent from "../../../../components/Svg/DeleteSvg";
import VoiceNote from "../../../models/VoiceNote.model";
import { unselectCategory } from "../../../redux/features/category.reducer";
import { removeNoteWithIndex, setIsNoteEditing, setSelectedNote } from "../../../redux/features/note.reducer";
import { unsetReminder } from "../../../redux/features/reminder.reducer";
import { StateModel } from "../../../redux/store/store";

import styles from "../NoteDetailPage.module.scss";

function PlayerAndButtons() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const isNoteEditing = useSelector((state: StateModel) => state.note.isNoteEditing);
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);
    const reminder = useSelector((state: StateModel) => state.reminder.reminderDate);
    const category = useSelector((state: StateModel) => state.category.selectedCategory);

    const isVoiceNote = selectedNote instanceof VoiceNote;

    function onEdit() {
        dispatch(setIsNoteEditing(true));
    }

    async function onSave() {
        dispatch(setIsNoteEditing(false));

        selectedNote.reminder = reminder;
        selectedNote.category = category;
        dispatch(setSelectedNote(selectedNote));
        dispatch(unselectCategory());
        dispatch(unsetReminder());
        ///Upload to firebase
        await router.push("/notes");
    }

    return (
        <div className={styles["player-and-buttons-section"]}>
            {isVoiceNote ? (
                <AudioPlayer className={styles["audio-player"]} volume={0.5} src={""} customAdditionalControls={[]} />
            ) : null}
            <div className={styles.buttons}>
                <div className={styles.button} onClick={async () => (isNoteEditing ? onSave() : onEdit())}>
                    {isNoteEditing ? "SAVE" : "EDIT"}
                </div>
                <div className={styles.button} onClick={() => setIsDeleteVisible(true)}>
                    <DeleteSvgComponent function={() => setIsDeleteVisible(true)} />
                </div>
            </div>
            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={async () => {
                        dispatch(removeNoteWithIndex());
                        await router.push("/notes");
                    }}
                    onCancel={() => {
                        setIsDeleteVisible(false);
                    }}
                />
            ) : null}
        </div>
    );
}

export default PlayerAndButtons;
