import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import styles from "../NoteDetailPage.module.scss";

type Props = {
    isVoiceNote: boolean;
    noteText: string;
    createdAt: string;
    lapTime: string;
};

function NoteDetailCard(props: Props) {
    return (
        <div className={styles["note-card"]}>
            <div className={styles["lap-row"]}>
                {props.isVoiceNote ? <p>{props.lapTime}</p> : null}
                <RemoveSvgComponent function={() => {}} />
            </div>
            <p className={styles["note-text"]}>{props.noteText}</p>
            <div className={styles["details"]}>
                <p>{props.createdAt}</p>
            </div>
        </div>
    );
}

export default NoteDetailCard;
