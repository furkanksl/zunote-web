import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AudioData, useRecorder } from "voice-recorder-react";

import MicSvgComponent from "../../../../components/Svg/MicSvg";
import PauseSvgComponent from "../../../../components/Svg/PauseSvg";
import PlaySvgComponent from "../../../../components/Svg/PlaySvg";
import StopSvgComponent from "../../../../components/Svg/StopSvg";
import { setIsRecording, setLapTime } from "../../../redux/features/recorder.reducer";
import UtilityService from "../../../services/utility.service";

type Props = {
    onRecord: (data: AudioData) => any;
};

function Recorder(props: Props) {
    const dispatch = useDispatch();
    const utilityService = new UtilityService();

    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

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
    }, [time]);

    function startVoiceRecording() {
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
