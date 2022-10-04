import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../redux/features/note.reducer";
import { StateModel } from "../../redux/store/store";
import AwsService from "../../services/aws.service";
import FirebaseService from "../../services/firebase/firebase.service";
import UtilityService from "../../services/utility.service";
import CategoryTabs from "./components/CategoryTabs";
import NoteList from "./components/NoteList";
import SelectCategoryBox from "./components/SelectCategoryBox";

import styles from "./NotesPage.module.scss";

function NotesPage() {
    const dispatch = useDispatch();

    const allNotes = useSelector((state: StateModel) => state.note.notes);

    const firebaseService = new FirebaseService();
    const awsService = new AwsService();
    const utilityService = new UtilityService();

    useEffect(() => {
        if (allNotes.length === 0) {
            new Promise(async (resolve, reject) => {
                let notes = await firebaseService.getAllNotes();
                const voiceNotesUrls = await awsService.getVoiceRecords();
                notes = utilityService.appendVoiceUrlsToVoiceNotes(notes, voiceNotesUrls);
                dispatch(setNotes(notes));
            });
        }
    }, []);

    return (
        <div className={styles["notes-page-wrapper"]}>
            <CategoryTabs />
            <SelectCategoryBox />
            <NoteList />
        </div>
    );
}

export default NotesPage;
