import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsRecording, setLapTime } from "redux/features/recorder.reducer";
import { StateModel } from "redux/store/store";

import { toast } from "react-toastify";
import { AudioData, useRecorder } from "voice-recorder-react";

import MicSvgComponent from "components/Svg/MicSvg";
import PauseSvgComponent from "components/Svg/PauseSvg";
import PlaySvgComponent from "components/Svg/PlaySvg";
import StopSvgComponent from "components/Svg/StopSvg";

import UserData from "models/UserData.model";
import VoiceNote from "models/VoiceNote.model";
import UtilityService from "services/utility.service";

type Props = {
    onRecord: (data: AudioData) => any;
};

function Recorder(props: Props) {
    const dispatch = useDispatch();
    const utilityService = new UtilityService();

    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const userData: UserData = useSelector((state: StateModel) => state.user.userData);
    const voiceNotes = useSelector((state: StateModel) =>
        state.note.notes.filter((note: any) => note instanceof VoiceNote)
    );

    const { time, data, stop, start, pause, resume } = useRecorder();

    useEffect(() => {
        if (data.blob.size !== 0) {
            props.onRecord(data);
        }
    }, [data?.url]);

    useEffect(() => {
        dispatch(
            setLapTime(utilityService.formatRecorderTime(time?.m) + ":" + utilityService.formatRecorderTime(time?.s))
        );

        if (time.m === 3 && userData.planId === 0) {
            stopVoiceRecording();

            toast.info("You reached the 3 mins single recording time limit in you Free plan");
        } else if (time.m === 10 && userData.planId === 1) {
            stopVoiceRecording();

            toast.info("You reached the 10 mins single recording time limit in you Standart plan");
        } else if (time.m === 30 && userData.planId === 2) {
            stopVoiceRecording();

            toast.info("You reached the 30 mins single recording time limit in you Premium plan");
        }
    }, [time]);

    function startVoiceRecording() {
        if (userData.planId === 0 && voiceNotes?.length >= 10) {
            toast.info("You reached the 10 voices note limit in you Free plan");
            return;
        } else if (userData.planId === 1 && voiceNotes?.length >= 100) {
            toast.info("You reached the 100 voices note in you Standart plan");
            return;
        }

        start();

        setIsActive(true);
        setIsStarted(true);

        dispatch(setIsRecording(true));
    }

    function pauseVoiceRecording() {
        pause();

        setIsActive(false);
    }

    function resumeVoiceRecording() {
        resume();

        setIsActive(true);
    }

    function stopVoiceRecording() {
        stop();
        setIsActive(false);
        setIsStarted(false);

        dispatch(setIsRecording(false));
    }

    return (
        <>
            {isStarted ? (
                isActive ? (
                    <PauseSvgComponent function={pauseVoiceRecording} />
                ) : (
                    <PlaySvgComponent function={resumeVoiceRecording} />
                )
            ) : (
                <MicSvgComponent function={startVoiceRecording} />
            )}
            {isStarted ? (
                <div className="time-details">
                    <span className="minute">{utilityService.formatRecorderTime(time.m)}</span>
                    <span>:</span>
                    <span className="second">{utilityService.formatRecorderTime(time.s)}</span>
                </div>
            ) : null}
            {isStarted ? <StopSvgComponent function={stopVoiceRecording} /> : null}
        </>
    );
}

export default Recorder;
