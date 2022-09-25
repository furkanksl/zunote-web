import { useDispatch, useSelector } from "react-redux";
import { setReminderState, unsetReminder } from "../../src/redux/features/reminder.reducer";

import CategorySvgComponent from "../Svg/CategorySvg";
import ReminderSvgComponent from "../Svg/ReminderSvg";
import RemoveSvgComponent from "../Svg/RemoveSvg";
import DatetimePicker from "../DatetimePicker";

import styles from "./Common.module.scss";
import moment from "moment";
import { setIsCategoryVisible } from "../../src/redux/features/dialog.reducer";
import { setSelectedCategory } from "../../src/redux/features/category.reducer";

function CategoryAndReminderSection() {
    const dispatch = useDispatch();

    const isReminderSelected = useSelector((state: any) => state.reminder.value);
    const reminderDate = useSelector((state: any) => state.reminder.reminderDate);
    const selectedCategory = useSelector((state: any) => state.category.selectedCategory);
    var dateString = moment.utc(reminderDate).format("YYYY-MMM-DD HH:mm");

    function removeReminder() {
        dispatch(unsetReminder());
    }

    function openCategoryDialog() {
        dispatch(setIsCategoryVisible(true));
    }

    function removeSelectedCategory() {
        dispatch(setSelectedCategory(""));
    }

    return (
        <div className={styles["reminder-and-category-container"]}>
            <div className={styles["category-row"]}>
                <div className={styles["icon-and-text"]}>
                    <CategorySvgComponent function={openCategoryDialog} />
                    <p onClick={openCategoryDialog}>{selectedCategory === "" ? "Set category" : selectedCategory}</p>
                </div>
                <RemoveSvgComponent function={removeSelectedCategory} />
            </div>
            <div className={styles["reminder-row"]}>
                <div className={styles["icon-and-text"]}>
                    <ReminderSvgComponent function={() => dispatch(setReminderState(!isReminderSelected))} />
                    {isReminderSelected ? (
                        <DatetimePicker />
                    ) : (
                        <p onClick={() => dispatch(setReminderState(!isReminderSelected))}>
                            {reminderDate === 0 ? "Set reminder" : dateString}
                        </p>
                    )}
                </div>
                <RemoveSvgComponent function={removeReminder} />
            </div>
        </div>
    );
}

export default CategoryAndReminderSection;
