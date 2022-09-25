import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCategoryWithIndex, setSelectedCategory } from "../../../src/redux/features/category.reducer";
import { setIsAddCategoryVisible, setIsCategoryVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import PlusSvgComponent from "../../Svg/PlusSvg";
import RemoveSvgComponent from "../../Svg/RemoveSvg";
import TitleBox from "../../TitleBox";

import styles from "./SelectCategoryDialog.module.scss";

function SelectCategoryDialog() {
    const dispatch = useDispatch();

    const isCategoryVisible = useSelector((state: StateModel) => state.dialog.isCategoryVisible);
    const categories = useSelector((state: StateModel) => state.category.categories);

    const closeDialog = () => dispatch(setIsCategoryVisible(false));

    const openAddDialog = () => {
        dispatch(setIsAddCategoryVisible(true));
        closeDialog();
    };

    function selectCategory(cat: string) {
        dispatch(setSelectedCategory(cat));
        closeDialog();
    }

    function deleteCategory(index: number) {
        dispatch(removeCategoryWithIndex(index));
    }

    return isCategoryVisible ? (
        <>
            <div className="dialog-wrapper" onClick={closeDialog}></div>
            <div className={styles["dialog-container"]}>
                <TitleBox title="CATEGORIES" />

                <div className={styles["add-category"]} onClick={openAddDialog}>
                    <PlusSvgComponent function={openAddDialog} />
                    <p>ADD</p>
                </div>

                <div className={styles["categor-list"]}>
                    {categories.map((cat: string, index: number) => {
                        return (
                            <div key={index} className={styles["category-card"]} onClick={() => selectCategory(cat)}>
                                <p className={styles["category-name"]}>{cat}</p>
                                <RemoveSvgComponent function={() => {}} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}

export default SelectCategoryDialog;
