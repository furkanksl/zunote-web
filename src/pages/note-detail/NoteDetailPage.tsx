import WhiteTextSvgComponent from "../../../components/Svg/WhiteTextSvg";
import WhiteVoiceSvgComponent from "../../../components/Svg/WhiteVoiceSvg";
import CategoryAndReminderSection from "./components/CategoryAndReminderSection";
import NoteSection from "./components/NoteSection";
import PlayerAndButtons from "./components/PlayerAndButtons";

import styles from "./NoteDetailPage.module.scss";

function NoteDetailPage() {
    const isVoiceNote = true;

    return (
        <div className={styles["note-detail-page-wrapper"]}>
            <div className={styles["note-icon-container"]}>
                {isVoiceNote ? <WhiteVoiceSvgComponent /> : <WhiteTextSvgComponent />}
            </div>
            <CategoryAndReminderSection />
            <NoteSection />
            <PlayerAndButtons />
        </div>
    );
}

export default NoteDetailPage;
