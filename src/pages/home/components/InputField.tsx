import React, { useState } from "react";
import { AudioData } from "voice-recorder-react/lib";
import { useDispatch } from "react-redux";
import { setIsCategoryVisible } from "redux/features/dialog.reducer";

import AddSvgCompoenent from "components/Svg/AddSvg";
import CategoryAndReminderSection from "components/Common/CategoryAndReminderSection";

import Recorder from "./Recorder";
import styles from "../HomePage.module.scss";

type Props = {
    onSave: (input: string) => any;
    onVoiceRecord: (data: AudioData) => any;
};

function InputField(props: Props) {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    function handleMessageChange(event: any) {
        setInputValue(event.target.value);
    }

    function saveNote() {
        props.onSave(inputValue);
        setInputValue("");
    }

    function showCategoryDialog() {
        dispatch(setIsCategoryVisible(true));
    }

    return (
        <div className={styles["input-container"]}>
            <CategoryAndReminderSection />
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
                    <Recorder onRecord={props.onVoiceRecord} />
                </div>
                <AddSvgCompoenent function={saveNote} />
            </div>
        </div>
    );
}

export default InputField;
