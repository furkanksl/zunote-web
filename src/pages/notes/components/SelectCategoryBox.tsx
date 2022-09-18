import React from "react";
import { useDispatch } from "react-redux";
import CategoryBlackSvgComponent from "../../../../components/Svg/CategoryBlackSvg";
import { setIsCategoryVisible } from "../../../redux/features/dialog.reducer";

import styles from "../NotesPage.module.scss";

function SelectCategoryBox() {
    const dispatch = useDispatch();

    const selectCategory = () => dispatch(setIsCategoryVisible(true));
    return (
        <div className={styles["select-category"]} onClick={selectCategory}>
            <CategoryBlackSvgComponent function={selectCategory} />
            <p>All</p>
        </div>
    );
}

export default SelectCategoryBox;
