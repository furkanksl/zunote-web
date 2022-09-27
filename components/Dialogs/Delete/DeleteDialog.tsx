import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDeleteVisible } from "../../../src/redux/features/dialog.reducer";
import { StateModel } from "../../../src/redux/store/store";
import TitleBox from "../../TitleBox";

import styles from "./DeleteDialog.module.scss";

type Props = {
    onConfirm: () => any;
    onCancel: () => any;
};

function DeleteDialog(props: Props) {
    function confrim(event: any) {
        props.onConfirm();
        cancel(event);
    }

    const cancel = (event: any) => {
        props.onCancel();
        event.stopPropagation();
    };

    return (
        <>
            <div className="dialog-wrapper" onClick={cancel}></div>
            <div className={styles["delete-container"]}>
                <TitleBox title="DELETE" />
                <p>Do you want to proceed? </p>

                <div className={styles.buttons}>
                    <div className={styles["cancel-button"]} onClick={cancel}>
                        Cancel
                    </div>

                    <div className={styles["confirm-button"]} onClick={confrim}>
                        Confirm
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteDialog;
