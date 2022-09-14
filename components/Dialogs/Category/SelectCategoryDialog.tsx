import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCategoryVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import PlusSvgComponent from "../../Svg/PlusSvg";
import RemoveSvgComponent from "../../Svg/RemoveSvg";

import styles from "./SelectCategoryDialog.module.scss";

function SelectCategoryDialog() {
    const dispatch = useDispatch();

    const isCategoryVisible = useSelector((state: StateModel) => state.dialog.isCategoryVisible);

    const closeDialog = () => dispatch(setIsCategoryVisible(false));

    return isCategoryVisible ? (
        <>
            <div className="dialog-wrapper" onClick={closeDialog}></div>
            <div className={styles["dialog-container"]}>
                <div className={styles.title}>
                    <p>CATEGORIES</p>
                </div>

                <div className={styles["add-category"]}>
                    <PlusSvgComponent function={() => {}} />
                    <p>ADD</p>
                </div>

                <div className={styles["categor-list"]}>
                    <div className={styles["category-card"]}>
                        <p className={styles["category-name"]}>CATEGORY 1</p>
                        <RemoveSvgComponent function={() => {}} />
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}

export default SelectCategoryDialog;
