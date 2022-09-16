import React from "react";
import CategoryBlackSvgComponent from "../../../../components/Svg/CategoryBlackSvg";

import styles from "../NotesPage.module.scss";

function SelectCategoryBox() {
    return (
        <div className={styles["select-category"]}>
            <CategoryBlackSvgComponent function={() => {}} />
            <p>All</p>
        </div>
    );
}

export default SelectCategoryBox;
