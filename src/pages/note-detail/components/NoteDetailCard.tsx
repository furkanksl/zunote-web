import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import UtilityService from "../../../services/utility.service";
import styles from "../NoteDetailPage.module.scss";

type Props = {
    isVoiceNote: boolean;
    noteText: string;
    createdAt: number;
    lapTime: string;
};

function NoteDetailCard(props: Props) {
    const utilityService = new UtilityService();

    return (
        <div className={styles["note-card"]}>
            <div className={styles["lap-row"]}>
                {props.isVoiceNote ? <p>{props.lapTime}</p> : null}
                <RemoveSvgComponent function={() => {}} />
            </div>
            <p className={styles["note-text"]}>{props.noteText}</p>
            <div className={styles["details"]}>
                <p>{utilityService.timestampToString(props.createdAt)}</p>
            </div>
        </div>
    );
}

export default NoteDetailCard;
