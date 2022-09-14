import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useRecorder } from "voice-recorder-react";

import MicSvgComponent from "../../../../components/Svg/MicSvg";
import PauseSvgComponent from "../../../../components/Svg/PauseSvg";
import PlaySvgComponent from "../../../../components/Svg/PlaySvg";
import StopSvgComponent from "../../../../components/Svg/StopSvg";
import { setIsRecording, setLapTime } from "../../../redux/features/recorder.reducer";
import UtilityService from "../../../services/utility.service";

function Recorder() {
    const dispatch = useDispatch();
    const utilityService = new UtilityService();

    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const { time, data, stop, start, pause, paused, resume, recording } = useRecorder();

    useEffect(() => {
        if (data.url && audioRef.current) {
            audioRef.current.src = data.url;
        }
        dispatch(
            setLapTime(utilityService.formatRecorderTime(time?.m) + ":" + utilityService.formatRecorderTime(time?.s))
        );
    }, [data?.url, time]);

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

    // eslint-disable-next-line
    const convertFileToBase64 = (file: any) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.mediaBlobUrl);

            reader.onload = () =>
                resolve({
                    fileName: file.title,
                    base64: reader.result,
                });
            reader.onerror = reject;
        });

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
