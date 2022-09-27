import { useState } from "react";
import { useDispatch } from "react-redux";
import MiniPlaySvgComponent from "../../../../components/Svg/MiniPlaySvg";
import MiniPauseSvgComponent from "../../../../components/Svg/MiniResumeSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { setIsDeleteVisible } from "../../../redux/features/dialog.reducer";
import { setSelectedNoteIndex } from "../../../redux/features/note.reducer";
import UtilityService from "../../../services/utility.service";

import styles from "../NotesPage.module.scss";
type Props = {
    noteText: string;
    createdAt: number;
    voiceUrl: string;
    index: number;
    onClick: () => any;
};
function VoiceNoteCard(props: Props) {
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);

    const utilityService = new UtilityService();

    const deleteItem = (event: any) => {
        dispatch(setSelectedNoteIndex(props.index));
        dispatch(setIsDeleteVisible(true));

        event.stopPropagation();
    };

    return (
        <div className={styles["voice-card"]} onClick={props.onClick}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent function={deleteItem} />
            </div>
            <div className={styles["details"]}>
                {isPlaying ? (
                    <MiniPauseSvgComponent
                        function={(event: any) => {
                            setIsPlaying(false);
                            event.stopPropagation();
                        }}
                    />
                ) : (
                    <MiniPlaySvgComponent
                        function={(event: any) => {
                            setIsPlaying(true);
                            event.stopPropagation();
                        }}
                    />
                )}
                <p>{utilityService.timestampToString(props.createdAt)}</p>
            </div>
        </div>
    );
}

export default VoiceNoteCard;
