import styles from "../NoteDetailPage.module.scss";
import NoteDetailCard from "./NoteDetailCard";

function NoteSection() {
    return (
        <div className={styles["note-section"]}>
            <NoteDetailCard
                isVoiceNote={true}
                createdAt="14 Aug 2022 13:34"
                lapTime="00:13"
                noteText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, delectus obcaecati. Impedit architecto"
            />
        </div>
    );
}

export default NoteSection;
