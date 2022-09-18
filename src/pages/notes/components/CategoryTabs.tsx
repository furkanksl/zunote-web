import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextSvgComponent from "../../../../components/Svg/TextSvg";
import VoiceSvgComponent from "../../../../components/Svg/VoiceSvg";
import { setNotesTabIndex } from "../../../redux/features/note.reducer";

import { StateModel } from "../../../redux/store/store";

import styles from "../NotesPage.module.scss";

function CategoryTabs() {
    const dispatch = useDispatch();
    const categoryIndex = useSelector((state: StateModel) => state.note.notesTabIndex);

    const changeTab = (index: number) => dispatch(setNotesTabIndex(index));

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
