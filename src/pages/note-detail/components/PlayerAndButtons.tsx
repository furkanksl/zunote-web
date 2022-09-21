import AudioPlayer from "react-h5-audio-player";
import DeleteSvgComponent from "../../../../components/Svg/DeleteSvg";

import styles from "../NoteDetailPage.module.scss";

function PlayerAndButtons() {
    return (
        <div className={styles["player-and-buttons-section"]}>
            <AudioPlayer className={styles["audio-player"]} volume={0.5} src={""} customAdditionalControls={[]} />
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
