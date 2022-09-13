import React, { useEffect, useRef, useState } from "react";
import { useRecorder } from "voice-recorder-react";

import MicSvgComponent from "../../../../components/Svg/MicSvg";
import PauseSvgComponent from "../../../../components/Svg/PauseSvg";
import PlaySvgComponent from "../../../../components/Svg/PlaySvg";
import StopSvgComponent from "../../../../components/Svg/StopSvg";

function Recorder() {
    const [isActive, setIsActive] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const { time, data, stop, start, pause, paused, resume, recording } = useRecorder();

    useEffect(() => {
        if (data.url && audioRef.current) {
            audioRef.current.src = data.url;
        }
    }, [data?.url]);

    function startVoiceRecording() {
        start();
        setIsActive(true);
        setIsStarted(true);
        // dispatch(setIsVoiceNote(true));
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
        // Save voice not here
        setIsActive(false);
        setIsStarted(false);
        // dispatch(setIsVoiceNote(false));
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
                    <span className="minute">{time.m}</span>
                    <span>:</span>
                    <span className="second">{time.s}</span>
                </div>
            ) : null}
            {isStarted ? <StopSvgComponent function={stopVoiceRecording} /> : null}
        </>
    );
}

export default Recorder;
