import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";
import DeleteSvgComponent from "../../../../components/Svg/DeleteSvg";
import VoiceNote from "../../../models/VoiceNote.model";
import { StateModel } from "../../../redux/store/store";

import styles from "../NoteDetailPage.module.scss";

function PlayerAndButtons() {
    const selectedNote = useSelector((state: StateModel) => state.note.selectedNote);

    const isVoiceNote = selectedNote instanceof VoiceNote;

    return (
        <div className={styles["player-and-buttons-section"]}>
            {isVoiceNote ? (
                <AudioPlayer className={styles["audio-player"]} volume={0.5} src={""} customAdditionalControls={[]} />
            ) : null}
            <div className={styles.buttons}>
                <div className={styles.button}>SAVE</div>
                <div className={styles.button}>
                    <DeleteSvgComponent function={() => {}} />
                </div>
            </div>
        </div>
    );
}

export default PlayerAndButtons;
