import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "redux/features/category.reducer";
import { setSelectedNote, setSelectedNoteIndex } from "redux/features/note.reducer";
import { setReminder } from "redux/features/reminder.reducer";
import { StateModel } from "redux/store/store";

import Note from "models/Note.model";
import VoiceNote from "models/VoiceNote.model";
import NoteCard from "./NoteCard";
import VoiceNoteCard from "./VoiceNoteCard";

import styles from "../NotesPage.module.scss";

function NoteList() {
    const dispatch = useDispatch();
    const router = useRouter();

    const sortingCat = useSelector((state: StateModel) => state.category.sortingCategory);

    const categoryIndex = useSelector((state: StateModel) => state.note.notesTabIndex);
    const notes = useSelector((state: StateModel) => state.note.notes);

    const selectNote = async (event: any, index: number) => {
        dispatch(setSelectedNoteIndex(index));
        dispatch(setSelectedNote(notes[index]));
        dispatch(setReminder(notes[index].reminder));
        dispatch(setSelectedCategory(notes[index].category));
        await router.push("/note-detail");
    };

    function noteCard(note: any, index: number) {
        return note instanceof VoiceNote ? (
            categoryIndex === 0 ? (
                <VoiceNoteCard
                    key={index}
                    index={index}
                    noteText={note.notes[0]?.noteText ?? ""}
                    createdAt={note.createdAt}
                    voiceUrl={note.voiceUrl}
                    duration={note.duration}
                    onClick={(event: any) => selectNote(event, index)}
                />
            ) : null
        ) : categoryIndex === 1 ? (
            <NoteCard
                key={index}
                index={index}
                noteText={note?.noteText ?? ""}
                createdAt={note.createdAt}
                onClick={(event: any) => selectNote(event, index)}
            />
        ) : null;
    }

    return (
        <div className={styles["cards"]}>
            {notes.map((note: VoiceNote | Note, index: number) =>
                sortingCat === "All"
                    ? noteCard(note, index)
                    : note.category === sortingCat
                    ? noteCard(note, index)
                    : null
            )}
        </div>
    );
}

export default NoteList;
