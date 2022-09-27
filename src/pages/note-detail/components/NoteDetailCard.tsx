import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    }

    function onTextAreaClick() {
        dispatch(setIsNoteEditing(true));
        resizeTextArea();
    }

    function resizeTextArea() {
        // return props.noteText.split(/\r|\r\n|\n/).length + 1;

        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            textAreaRef.current.style.height = scrollHeight + "px";

            // return scrollHeight + "px";
        }
        // else return "100px";
    }

    return (
        <div className={styles["note-card"]}>
            <div className={styles["lap-row"]}>
                {props.isVoiceNote ? <p>{props.lapTime}</p> : null}
                <RemoveSvgComponent function={() => {}} />
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
        </div>
    );
}

export default NoteDetailCard;
