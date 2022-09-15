import React, { useState } from "react";
import TextSvgComponent from "../../../../components/Svg/TextSvg";
import VoiceSvgComponent from "../../../../components/Svg/VoiceSvg";

import styles from "../NotesPage.module.scss";

function CategoryTabs() {
    const [categoryIndex, setCategoryIndex] = useState(0);

    const changeTab = (index: number) => setCategoryIndex(index);

    return (
        <div className={styles["category-tab"]}>
            <div className={categoryIndex == 0 ? styles.selected : ""} onClick={() => changeTab(0)}>
                <VoiceSvgComponent function={() => {}} />
            </div>
            <div className={categoryIndex == 1 ? styles.selected : ""} onClick={() => changeTab(1)}>
                <TextSvgComponent function={() => {}} />
            </div>
        </div>
    );
}

export default CategoryTabs;
