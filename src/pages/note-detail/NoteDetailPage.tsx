import React from "react";
import RemoveSvgComponent from "../../../components/Svg/RemoveSvg";
import WhiteTextSvgComponent from "../../../components/Svg/WhiteTextSvg";
import WhiteVoiceSvgComponent from "../../../components/Svg/WhiteVoiceSvg";
import CategoryAndReminderSection from "./components/CategoryAndReminderSection";
import NoteSection from "./components/NoteSection";

import styles from "./NoteDetailPage.module.scss";

function NoteDetailPage() {
    const isVoiceNote = true;

    return (
        <div className={styles["note-detail-page-wrapper"]}>
            {isVoiceNote ? <WhiteVoiceSvgComponent /> : <WhiteTextSvgComponent />}
            <CategoryAndReminderSection />
            <NoteSection />
        </div>
    );
}

export default NoteDetailPage;
