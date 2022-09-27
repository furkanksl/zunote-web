import CategoryTabs from "./components/CategoryTabs";
import NoteList from "./components/NoteList";
import SelectCategoryBox from "./components/SelectCategoryBox";

import styles from "./NotesPage.module.scss";

function NotesPage() {
    return (
        <div className={styles["notes-page-wrapper"]}>
            <CategoryTabs />
            <SelectCategoryBox />
            <NoteList />
        </div>
    );
}

export default NotesPage;
