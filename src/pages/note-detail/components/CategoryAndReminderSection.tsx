import CategorySvgComponent from "../../../../components/Svg/CategorySvg";
import ReminderSvgComponent from "../../../../components/Svg/ReminderSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";

import styles from "../NoteDetailPage.module.scss";

function CategoryAndReminderSection() {
    return (
        <div className={styles["reminder-and-category-container"]}>
            <div className={styles["category-row"]}>
                <div className={styles["icon-and-text"]}>
                    <CategorySvgComponent function={() => {}} />
                    <p>Category 1</p>
                </div>
                <RemoveSvgComponent function={() => {}} />
            </div>
            <div className={styles["reminder-row"]}>
                <div className={styles["icon-and-text"]}>
                    <ReminderSvgComponent function={() => {}} />
                    <p>12 Aug 2022 10:34</p>
                </div>
                <RemoveSvgComponent function={() => {}} />
            </div>
        </div>
    );
}

export default CategoryAndReminderSection;
