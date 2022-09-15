import React, { useState } from "react";
import CategoryTabs from "./components/CategoryTabs";

import styles from "./NotesPage.module.scss";

function NotesPage() {
    return (
        <div className={styles["notes-page-wrapper"]}>
            <CategoryTabs />
        </div>
    );
}

export default NotesPage;
