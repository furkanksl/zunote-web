import React, { useState } from "react";

import AddSvgCompoenent from "../../../../components/Svg/AddSvg";
import CategorySvgComponent from "../../../../components/Svg/CategorySvg";
import ReminderSvgComponent from "../../../../components/Svg/ReminderSvg";

import styles from "../../../styles/home.module.scss";
import Recorder from "./Recorder";
type Props = {
    onSave: (input: string) => any;
};
function InputField(props: Props) {
    const [inputValue, setInputValue] = useState("");

    function handleMessageChange(event: any) {
        setInputValue(event.target.value);
    }

    function saveNote() {
        props.onSave(inputValue);
        setInputValue("");
    }

    return (
        <div className={styles["input-container"]}>
            <div className={styles["property-field"]}>
                <div className={styles.category}>
                    <CategorySvgComponent function={() => {}} />
                    <p>Category 1</p>
                </div>
                <div className={styles.reminder}>
                    <p>18:00 Aug 18 2022</p>
                    <ReminderSvgComponent function={() => {}} />
                </div>
            </div>
            <div className={styles.textfield}>
                <textarea
                    placeholder="Type something..."
                    rows={5}
                    value={inputValue}
                    onChange={handleMessageChange}
                ></textarea>
            </div>

            <div className={styles["buttons-container"]}>
                <div className={styles["voice-buttons-container"]}>
                    <Recorder />
                </div>
                <AddSvgCompoenent function={saveNote} />
            </div>
        </div>
    );
}

export default InputField;
