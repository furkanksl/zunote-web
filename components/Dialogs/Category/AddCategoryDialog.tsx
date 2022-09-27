import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addNewCategory } from "../../../src/redux/features/category.reducer";
import { setIsAddCategoryVisible, setIsCategoryVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import TitleBox from "../../TitleBox";

import styles from "./AddCategoryDialog.module.scss";

function AddCategoryDialog() {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const isAddCategoryVisible = useSelector((state: StateModel) => state.dialog.isAddCategoryVisible);

    const closeDialog = () => dispatch(setIsAddCategoryVisible(false));

    function handleMessageChange(event: any) {
        setInputValue(event.target.value);
    }

    function addCategory() {
        if (inputValue === "") {
            toast.info("Please fill the text field to add a new category");
            return;
        }
        dispatch(addNewCategory(inputValue));
        setInputValue("");
        closeDialog();
        dispatch(setIsCategoryVisible(true));
    }

    return isAddCategoryVisible ? (
        <>
            <div className="dialog-wrapper" onClick={closeDialog}></div>
            <div className={styles["add-category-container"]}>
                <TitleBox title="ADD CATEGORY" />
                <div className={styles.textfield}>
                    <textarea
                        placeholder="Type something..."
                        rows={2}
                        value={inputValue}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <div className={styles["add-button"]} onClick={addCategory}>
                    ADD
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}

export default AddCategoryDialog;
