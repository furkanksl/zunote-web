import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteDialog from "../../../../components/Dialogs/Delete/DeleteDialog";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsNoteEditing, setSelectedNote } from "../../../redux/features/note.reducer";
import { StateModel } from "../../../redux/store/store";
import UtilityService from "../../../services/utility.service";
import styles from "../NoteDetailPage.module.scss";

type Props = {
    isVoiceNote: boolean;
    noteText: string;
    createdAt: number;
    lapTime: string;
    noteIndex: number;
};

function NoteDetailCard(props: Props) {
    const dispatch = useDispatch();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);

    const isNoteEditing = useSelector((state: StateModel) => state.note.isNoteEditing);
    let selectedNote = useSelector((state: StateModel) => state.note.selectedNote);
    const utilityService = new UtilityService();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function onChange(e: any) {
        e.preventDefault();

        const value = e.target.value;

        if (props.isVoiceNote) {
            selectedNote.notes[props.noteIndex].noteText = value;
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

    return (
        <div className={styles["note-card"]}>
            <div className={styles["lap-row"]}>
                {props.isVoiceNote ? <p>{props.lapTime}</p> : null}
                {props.isVoiceNote ? <RemoveSvgComponent function={() => setIsDeleteVisible(true)} /> : null}
            </div>
            <textarea
                onClick={onTextAreaClick}
                className={styles["text-field"]}
                key={props.noteText}
                defaultValue={props.noteText}
                readOnly={!isNoteEditing}
                onChange={(e: any) => onChange(e)}
                ref={textAreaRef}
                onBlur={() => dispatch(setSelectedNote(selectedNote))}
            />
            <div className={styles["details"]}>
                <p>{utilityService.timestampToString(props.createdAt)}</p>
            </div>

            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={async () => {
                        selectedNote.notes.splice(props.noteIndex, 1);
                        selectedNote.notes = [...selectedNote.notes];
                        dispatch(setSelectedNote(selectedNote));
                    }}
                    onCancel={() => {
                        setIsDeleteVisible(false);
                    }}
                />
            ) : null}
        </div>
    );
}

export default NoteDetailCard;
