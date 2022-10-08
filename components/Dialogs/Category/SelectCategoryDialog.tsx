import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    removeCategoryWithIndex,
    setIsSorting,
    setSelectedCategory,
    setSortingCategory,
} from "../../../src/redux/features/category.reducer";
import { setIsAddCategoryVisible, setIsCategoryVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import FirebaseService from "../../../src/services/firebase/firebase.service";
import PlusSvgComponent from "../../Svg/PlusSvg";
import RemoveSvgComponent from "../../Svg/RemoveSvg";
import TitleBox from "../../TitleBox";
import DeleteDialog from "../Delete/DeleteDialog";

import styles from "./SelectCategoryDialog.module.scss";

function SelectCategoryDialog() {
    const dispatch = useDispatch();
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [idx, setIdx] = useState(0);
    const firebaseService = new FirebaseService();

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

    async function deleteCategory(index: number) {
        dispatch(removeCategoryWithIndex(index));
        await firebaseService.saveCategory(categories.filter((item: string) => item !== categories[index]));
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
                                {isSorting ? null : (
                                    <RemoveSvgComponent
                                        function={(event: any) => {
                                            setIdx(index);
                                            setIsDeleteVisible(true);
                                            event.stopPropagation();
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={async () => {
                        deleteCategory(idx);
                        setIsDeleteVisible(false);
                    }}
                    onCancel={() => setIsDeleteVisible(false)}
                />
            ) : null}
        </>
    ) : (
        <></>
    );
}

export default SelectCategoryDialog;
