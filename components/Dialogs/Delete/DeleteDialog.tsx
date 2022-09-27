import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDeleteVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import TitleBox from "../../TitleBox";

import styles from "./DeleteDialog.module.scss";

type Props = {
    onConfirm: () => any;
};

function DeleteDialog(props: Props) {
    const dispatch = useDispatch();

    const isDeleteVisible = useSelector((state: StateModel) => state.dialog.isDeleteVisible);

    const closeDialog = () => dispatch(setIsDeleteVisible(false));

    function confrim() {
        props.onConfirm();
        closeDialog();
    }

    return isDeleteVisible ? (
        <>
            <div className="dialog-wrapper" onClick={closeDialog}></div>
            <div className={styles["delete-container"]}>
                <TitleBox title="DELETE" />
                <p>Do you want to proceed? </p>

                <div className={styles.buttons}>
                    <div className={styles["cancel-button"]} onClick={closeDialog}>
                        Cancel
                    </div>

                    <div className={styles["confirm-button"]} onClick={confrim}>
                        Confirm
                    </div>
                </div>
            </div>
        </>
    ) : (
        <></>
    );
}

export default DeleteDialog;
