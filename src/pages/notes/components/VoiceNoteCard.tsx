import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import DeleteDialog from "../../../../components/Dialogs/Delete/DeleteDialog";
import MiniPlaySvgComponent from "../../../../components/Svg/MiniPlaySvg";
import MiniPauseSvgComponent from "../../../../components/Svg/MiniResumeSvg";
import RemoveSvgComponent from "../../../../components/Svg/RemoveSvg";
import { removeNoteWithIndex, setSelectedNoteIndex } from "../../../redux/features/note.reducer";
import FirebaseService from "../../../services/firebase/firebase.service";
import UtilityService from "../../../services/utility.service";

import styles from "../NotesPage.module.scss";

type Props = {
    noteText: string;
    createdAt: number;
    voiceUrl: string;
    index: number;
    onClick: (event: any) => any;
};

function VoiceNoteCard(props: Props) {
    const dispatch = useDispatch();

    const firebaseService = new FirebaseService();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const audioRef = useRef<any>();

    const utilityService = new UtilityService();

    const deleteItem = () => {
        dispatch(setSelectedNoteIndex(props.index));
        setIsDeleteVisible(true);
    };

    const togglePlayer = () => {
        if (audioRef.current?.paused) {
            audioRef.current?.play();

            setIsPlaying(true);
        } else {
            audioRef.current?.pause();

            setIsPlaying(false);
        }
    };

    return (
        <div className={styles["voice-card"]} onClick={props.onClick}>
            <div className={styles["note-text"]}>
                <p>{props.noteText}</p>
                <RemoveSvgComponent
                    function={(event: any) => {
                        deleteItem();
                        event.stopPropagation();
                    }}
                />
            </div>
            <div className={styles["details"]}>
                {isPlaying ? (
                    <MiniPauseSvgComponent
                        function={(event: any) => {
                            togglePlayer();
                            event.stopPropagation();
                        }}
                    />
                ) : (
                    <MiniPlaySvgComponent
                        function={(event: any) => {
                            togglePlayer();
                            event.stopPropagation();
                        }}
                    />
                )}
                <p>{utilityService.timestampToString(props.createdAt)}</p>
            </div>
            {isDeleteVisible ? (
                <DeleteDialog
                    onConfirm={async () => {
                        dispatch(removeNoteWithIndex());

                        await firebaseService.deleteNote(`${props.createdAt}`);
                    }}
                    onCancel={() => setIsDeleteVisible(false)}
                />
            ) : null}
            <audio ref={audioRef} src={props.voiceUrl} hidden playsInline />
        </div>
    );
}

export default VoiceNoteCard;
