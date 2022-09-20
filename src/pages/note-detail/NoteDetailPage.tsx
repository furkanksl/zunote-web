import React from "react";
import CategorySvgComponent from "../../../components/Svg/CategorySvg";
import ReminderSvgComponent from "../../../components/Svg/ReminderSvg";
import RemoveSvgComponent from "../../../components/Svg/RemoveSvg";
import WhiteVoiceSvgComponent from "../../../components/Svg/WhiteVoiceSvg";

import styles from "./NoteDetailPage.module.scss";

function NoteDetailPage() {
    return (
        <div className={styles["note-detail-page-wrapper"]}>
            <WhiteVoiceSvgComponent />
            <div className={styles["reminder-and-category-container"]}>
                <div className={styles["category-row"]}>
                    <div className={styles["icon-and-text"]}>
                        <CategorySvgComponent function={() => {}} />
                        <p>Category 1</p>
                    </div>
                    <RemoveSvgComponent function={() => {}} />
                </div>
                <div className={styles["reminder-row"]}>
                    <div className={styles["icon-and-text"]}>
                        <ReminderSvgComponent function={() => {}} />
                        <p>12 Aug 2022 10:34</p>
                    </div>
                    <RemoveSvgComponent function={() => {}} />
                </div>
            </div>
        </div>
    );
}

export default NoteDetailPage;
