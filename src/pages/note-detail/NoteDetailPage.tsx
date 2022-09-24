import { useSelector } from "react-redux";
import WhiteTextSvgComponent from "../../../components/Svg/WhiteTextSvg";
import WhiteVoiceSvgComponent from "../../../components/Svg/WhiteVoiceSvg";
import VoiceNote from "../../models/VoiceNote.model";
import { StateModel } from "../../redux/store/store";
import CategoryAndReminderSection from "../../../components/Common/CategoryAndReminderSection";
import NoteSection from "./components/NoteSection";
import PlayerAndButtons from "./components/PlayerAndButtons";

import styles from "./NoteDetailPage.module.scss";

function NoteDetailPage() {
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);

    const isVoiceNote = selectedNote instanceof VoiceNote;

    return (
        <div className={styles["note-detail-page-wrapper"]}>
            <div className={styles["note-icon-container"]}>
                {isVoiceNote ? <WhiteVoiceSvgComponent /> : <WhiteTextSvgComponent />}
            </div>
            <NoteSection selectedNote={selectedNote} isVoiceNote={isVoiceNote} />
            <CategoryAndReminderSection />
            <PlayerAndButtons />
        </div>
    );
}

export default NoteDetailPage;
