import Note from "../../../models/Note.model";
import VoiceNote, { TimedNote } from "../../../models/VoiceNote.model";
import NoteDetailCard from "./NoteDetailCard";

import styles from "../NoteDetailPage.module.scss";

type Props = {
    selectedNote: VoiceNote | Note;
    isVoiceNote: boolean;
};

function NoteSection(props: Props) {
    return (
        <div className={styles["note-section"]}>
            {props.selectedNote instanceof VoiceNote ? (
                props.selectedNote.notes.map((note: TimedNote, index: number) => {
                    return (
                        <NoteDetailCard
                            key={index}
                            isVoiceNote={props.isVoiceNote}
                            createdAt={note.createdAt}
                            lapTime={note.time}
                            noteText={note.noteText}
                            noteIndex={index}
                        />
                    );
                })
            ) : (
                <NoteDetailCard
                    isVoiceNote={props.isVoiceNote}
                    createdAt={props.selectedNote?.createdAt ?? ""}
                    lapTime={""}
                    noteText={props.selectedNote?.noteText ?? ""}
                    noteIndex={0}
                />
            )}
        </div>
    );
}

export default NoteSection;
