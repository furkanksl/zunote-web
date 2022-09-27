import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsNoteEditing, setSelectedNote } from "../../../redux/features/note.reducer";
import { StateModel } from "../../../redux/store/store";

import VoiceNote from "../../../models/VoiceNote.model";
import DeleteDialog from "../../../../components/Dialogs/Delete/DeleteDialog";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import UtilityService from "../../../services/utility.service";

import styles from "../NoteDetailPage.module.scss";

type Props = {
    index: number;
};

function NoteDetailCard(props: Props) {
    const dispatch = useDispatch();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const isNoteEditing = useSelector((state: StateModel) => state.note.isNoteEditing);
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);
    const utilityService = new UtilityService();
    const isVoiceNote = selectedNote instanceof VoiceNote;
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function onChange(e: any) {
        e.preventDefault();

        const value = e.target.value;

        if (isVoiceNote) {
            selectedNote.notes[props.index].noteText = value;
        } else {
            selectedNote.noteText = value;
        }

        resizeTextArea();
    }

    function onTextAreaClick() {
        dispatch(setIsNoteEditing(true));
    }

    useEffect(() => {
        resizeTextArea();
    }, []);

    function resizeTextArea() {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }

    return (isVoiceNote ? selectedNote.notes[props.index] !== undefined : true) ? (
        <div className={styles["note-card"]}>
            <div className={styles["lap-row"]}>
                {isVoiceNote ? <p>{selectedNote?.notes[props.index]?.time}</p> : null}
                {isVoiceNote ? (
                    <RemoveSvgComponent
                        function={() => {
                            setIsDeleteVisible(true);
                        }}
                    />
                ) : null}
            </div>
            <textarea
                onClick={onTextAreaClick}
                className={styles["text-field"]}
                key={isVoiceNote ? selectedNote?.notes[props.index].noteText : selectedNote.noteText}
                defaultValue={isVoiceNote ? selectedNote?.notes[props.index].noteText : selectedNote.noteText}
                readOnly={!isNoteEditing}
                onChange={(e: any) => onChange(e)}
                ref={textAreaRef}
                onBlur={() => dispatch(setSelectedNote(selectedNote))}
            />
            <div className={styles["details"]}>
                <p>
                    {utilityService.timestampToString(
                        isVoiceNote ? selectedNote?.notes[props.index]?.createdAt : selectedNote.createdAt
                    )}
                </p>
            </div>

            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={() => {
                        selectedNote.notes.splice(props.index, 1);
                        dispatch(setSelectedNote(selectedNote));
                    }}
                    onCancel={() => {
                        setIsDeleteVisible(false);
                    }}
                />
            ) : null}
        </div>
    ) : null;
}

export default NoteDetailCard;
