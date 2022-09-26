import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeCategoryWithIndex,
    setIsSorting,
    setSelectedCategory,
    setSortingCategory,
} from "../../../src/redux/features/category.reducer";
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
    const isSorting = useSelector((state: StateModel) => state.category.isSorting);

    const closeDialog = () => dispatch(setIsCategoryVisible(false));

    const openAddDialog = () => {
        dispatch(setIsAddCategoryVisible(true));
        closeDialog();
    };

    function selectCategory(cat: string) {
        if (isSorting) {
            dispatch(setSortingCategory(cat));
            dispatch(setIsSorting(false));
        } else {
            dispatch(setSelectedCategory(cat));
        }

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

                {isSorting ? null : (
                    <div className={styles["add-category"]} onClick={openAddDialog}>
                        <PlusSvgComponent function={openAddDialog} />
                        <p>ADD</p>
                    </div>
                )}

                <div className={styles["categor-list"]}>
                    {isSorting ? (
                        <div className={styles["category-card"]} onClick={() => selectCategory("All")}>
                            <p className={styles["category-name"]}>All</p>
                            <div></div>
                        </div>
                    ) : null}
                    {categories?.map((cat: string, index: number) => {
                        return (
                            <div key={index} className={styles["category-card"]} onClick={() => selectCategory(cat)}>
                                <p className={styles["category-name"]}>{cat}</p>
                                {isSorting ? null : <RemoveSvgComponent function={() => {}} />}
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
