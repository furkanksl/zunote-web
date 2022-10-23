import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "redux/store/store";
import { unselectCategory } from "redux/features/category.reducer";
import { removeNoteWithIndex, setIsNoteEditing, setSelectedNote } from "redux/features/note.reducer";
import { unsetReminder } from "redux/features/reminder.reducer";

import DeleteDialog from "components/Dialogs/Delete/DeleteDialog";
import DeleteSvgComponent from "components/Svg/DeleteSvg";
import LoadingSvgComponent from "components/Svg/LoadingSvg";

import VoiceNote from "models/VoiceNote.model";
import AwsService from "services/aws.service";
import FirebaseService from "services/firebase/firebase.service";
import UtilityService from "services/utility.service";

import styles from "../NoteDetailPage.module.scss";

function PlayerAndButtons() {
    const dispatch = useDispatch();
    const router = useRouter();

    const firebaseService = new FirebaseService();
    const awsService = new AwsService();
    const utilityService = new UtilityService();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const isNoteEditing = useSelector((state: StateModel) => state.note.isNoteEditing);
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);
    const reminder = useSelector((state: StateModel) => state.reminder.reminderDate);
    const category = useSelector((state: StateModel) => state.category.selectedCategory);

    const isVoiceNote = selectedNote instanceof VoiceNote;

    const onEdit = () => dispatch(setIsNoteEditing(true));

    async function onSave() {
        dispatch(setIsNoteEditing(false));

        selectedNote.reminder = reminder;
        selectedNote.category = category;
        dispatch(setSelectedNote(selectedNote));
        dispatch(unselectCategory());
        dispatch(unsetReminder());
        await firebaseService.updateNote(selectedNote);
        await router.push("/notes");
    }

    return (
        <div className={styles["player-and-buttons-section"]}>
            {isVoiceNote ? (
                <audio
                    onError={() => {
                        if (utilityService.isIOS() && selectedNote.voiceUrl.includes("blob")) {
                            toast.info("Your browser does not support this operation. Please refresh the page!");
                            return;
                        }
                    }}
                    controls
                    src={selectedNote.voiceUrl}
                    preload="auto"
                />
            ) : null}
            <div className={styles.buttons}>
                <div className={styles.button} onClick={async () => (isNoteEditing ? onSave() : onEdit())}>
                    {isNoteEditing ? "SAVE" : "EDIT"}
                </div>
                <div className={styles.button} onClick={() => setIsDeleteVisible(true)}>
                    {isDeleting ? (
                        <LoadingSvgComponent />
                    ) : (
                        <DeleteSvgComponent function={() => setIsDeleteVisible(true)} />
                    )}
                </div>
            </div>
            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={async () => {
                        setIsDeleting(true);
                        dispatch(removeNoteWithIndex());
                        await firebaseService.deleteNote(`${selectedNote.createdAt}`);
                        if (selectedNote.isVoiceNote) {
                            await awsService.deleteVoiceRecord(`${selectedNote.createdAt}`);
                        }
                        setIsDeleting(false);
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
