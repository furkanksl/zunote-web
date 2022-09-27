import VoiceNote, { TimedNote } from "../../../models/VoiceNote.model";
import NoteDetailCard from "./NoteDetailCard";

import styles from "../NoteDetailPage.module.scss";
import { useSelector } from "react-redux";
import { StateModel } from "../../../redux/store/store";

function NoteSection() {
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);

    return (
        <div className={styles["note-section"]}>
            {selectedNote instanceof VoiceNote ? (
                selectedNote.notes.map((note: TimedNote, index: number) => {
                    return <NoteDetailCard key={index} index={index} />;
                })
            ) : (
                <NoteDetailCard index={0} />
            )}
        </div>
    );
}

export default NoteSection;
