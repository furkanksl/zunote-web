import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Note from "../../src/models/Note.model";
import VoiceNote from "../../src/models/VoiceNote.model";
import { addNewNote } from "../../src/redux/features/note.reducer";
import styles from "../../src/styles/home.module.scss";

function HomePage() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [isVoiceNote, setIsVoiceNote] = useState(false);
    const [savedVoiceNotes, setSavedVoiceNotes] = useState([]);
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);

    function handleMessageChange(event: any) {
        // 👇️ access textarea value
        setInputValue(event.target.value);
    }

    function saveNote() {
        const createdAt = Date.now().toString();

        if (isVoiceNote) {
        } else {
            const newNote = new Note({
                category: "",
                createdAt: createdAt,
                noteText: inputValue,
                reminder: "0",
            });

            setSavedNotes([...savedNotes, newNote].reverse());

            dispatch(addNewNote(newNote));
        }

        setInputValue("");
    }

    return (
        <div className={styles["home-page-wrapper"]}>
            <div className={styles["just-added-container"]}>
                <div className={styles["title-box"]}>
                    <p>JUST ADDED</p>
                </div>
                <div className={styles["note-container"]}>
                    {savedNotes?.map((noteItem: Note | VoiceNote, index: number) => {
                        return (
                            <div key={index} className={styles["note-card"]}>
                                <p>{noteItem instanceof Note ? noteItem?.noteText : noteItem?.notes[0]?.noteText}</p>
                            </div>
                        );
                    })}

                    {/* <div className={styles["voice-note-card"]}>
                        <p className={styles.lap}></p>
                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit.</p>
                    </div> */}
                </div>
            </div>
            <div className={styles["input-container"]}>
                <div className={styles["property-field"]}>
                    <div className={styles.category}>
                        <svg width={29} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.667 10.167h.5V2.722H2.722v7.445h6.945Zm16.11 0h.5V2.722h-7.444v7.445h6.945Zm-16.11 16.11h.5v-7.444H2.722v7.445h6.945ZM1.61.5h9.667a1.111 1.111 0 0 1 1.11 1.111v9.667a1.11 1.11 0 0 1-1.11 1.11H1.61A1.111 1.111 0 0 1 .5 11.279V1.61A1.111 1.111 0 0 1 1.611.5Zm16.111 0h9.667A1.111 1.111 0 0 1 28.5 1.611v9.667a1.111 1.111 0 0 1-1.111 1.11h-9.667a1.111 1.111 0 0 1-1.11-1.11V1.61A1.111 1.111 0 0 1 17.721.5ZM1.612 16.611h9.666a1.111 1.111 0 0 1 1.11 1.111v9.667a1.111 1.111 0 0 1-1.11 1.111H1.61A1.111 1.111 0 0 1 .5 27.389v-9.667a1.111 1.111 0 0 1 1.111-1.11Zm15 5.945a5.951 5.951 0 0 1 5.944-5.945 5.951 5.951 0 0 1 5.944 5.945 5.95 5.95 0 0 1-5.944 5.944 5.951 5.951 0 0 1-5.945-5.944Zm2.221 0a3.726 3.726 0 0 0 3.723 3.722 3.725 3.725 0 0 0 3.722-3.722 3.726 3.726 0 0 0-3.722-3.723 3.726 3.726 0 0 0-3.723 3.723Z"
                                fill="#D9D9D9"
                                stroke="#000"
                            />
                        </svg>
                        <p>Category 1</p>
                    </div>
                    <div className={styles.reminder}>
                        <p>18:00 Aug 18 2022</p>
                        <svg width={24} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="a" fill="#fff">
                                <path d="M21.113 20.945v-8.342c0-2.22-.692-4.376-1.962-6.118S16.107 3.515 14.114 3v-.734a2.406 2.406 0 0 0-.637-1.605A2.048 2.048 0 0 0 11.985 0c-.558 0-1.094.238-1.492.662-.398.424-.627 1-.637 1.605v.742c-1.986.52-3.752 1.75-5.016 3.49-1.264 1.74-1.952 3.89-1.953 6.104v8.342L0 24.075v1.446h24v-1.446l-2.887-3.13ZM8.792 25.521c-.002.454.078.905.237 1.326.158.42.391.803.686 1.127.295.323.646.58 1.033.756a2.98 2.98 0 0 0 1.22.27 3.07 3.07 0 0 0 2.262-1.001 3.612 3.612 0 0 0 .947-2.443v-.035" />
                            </mask>
                            <path
                                d="M21.113 20.945v-8.342c0-2.22-.692-4.376-1.962-6.118S16.107 3.515 14.114 3v-.734a2.406 2.406 0 0 0-.637-1.605A2.048 2.048 0 0 0 11.985 0c-.558 0-1.094.238-1.492.662-.398.424-.627 1-.637 1.605v.742c-1.986.52-3.752 1.75-5.016 3.49-1.264 1.74-1.952 3.89-1.953 6.104v8.342L0 24.075v1.446h24v-1.446l-2.887-3.13ZM8.792 25.521c-.002.454.078.905.237 1.326.158.42.391.803.686 1.127.295.323.646.58 1.033.756a2.98 2.98 0 0 0 1.22.27 3.07 3.07 0 0 0 2.262-1.001 3.612 3.612 0 0 0 .947-2.443v-.035"
                                fill="#D9D9D9"
                            />
                            <path
                                d="M21.113 20.945h-1a1 1 0 0 0 .265.678l.735-.678Zm0-8.342h1-1Zm-6.999-9.602h-1a1 1 0 0 0 .75.968l.25-.968Zm0-.734h1v-.016l-1 .016Zm-4.258 0-1-.016v.016h1Zm0 .742.254.967a1 1 0 0 0 .746-.967h-1Zm-6.97 9.594h-1 1Zm0 8.342.736.678a1 1 0 0 0 .265-.678h-1ZM0 24.075l-.735-.678a1 1 0 0 0-.265.678h1Zm0 1.446h-1a1 1 0 0 0 1 1v-1Zm24 0v1a1 1 0 0 0 1-1h-1Zm0-1.446h1a1 1 0 0 0-.265-.678l-.735.678Zm-14.208 1.45a1 1 0 1 0-2-.01l2 .01ZM11.968 29l.006-1-.006 1Zm3.21-3.444 1 .005v-.005h-1Zm1-.035a1 1 0 0 0-2 0h2Zm5.935-4.576v-8.342h-2v8.342h2Zm0-8.343c-.001-2.425-.756-4.788-2.154-6.706l-1.616 1.178c1.141 1.566 1.77 3.514 1.77 5.53l2-.002ZM19.96 5.896c-1.4-1.92-3.366-3.288-5.595-3.864l-.5 1.937c1.757.454 3.338 1.54 4.479 3.105l1.616-1.178ZM15.114 3v-.734h-2v.734h2Zm0-.75a3.406 3.406 0 0 0-.908-2.274l-1.457 1.37c.22.234.36.57.366.937l2-.033Zm-.908-2.274A3.047 3.047 0 0 0 11.986-1v2c.268 0 .544.114.762.346l1.458-1.369ZM11.986-1c-.848 0-1.644.361-2.222.977l1.458 1.37c.218-.233.494-.347.763-.347v-2Zm-2.222.977a3.406 3.406 0 0 0-.908 2.274l2 .033c.006-.368.145-.703.366-.938L9.764-.023Zm-.908 2.29v.742h2v-.742h-2Zm.747-.226c-2.22.582-4.18 1.952-5.572 3.87l1.618 1.175c1.135-1.563 2.71-2.651 4.46-3.11l-.506-1.935ZM4.03 5.911c-1.392 1.915-2.143 4.272-2.144 6.691l2 .002c0-2.011.626-3.954 1.762-5.518L4.03 5.91Zm-2.144 6.692v8.342h2v-8.342h-2Zm.265 7.664-2.887 3.13 1.47 1.356 2.887-3.13-1.47-1.356ZM-1 24.075v1.446h2v-1.446h-2Zm1 2.446h24v-2H0v2Zm25-1v-1.446h-2v1.446h2Zm-.265-2.124-2.887-3.13-1.47 1.356 2.887 3.13 1.47-1.356ZM7.792 25.516a4.718 4.718 0 0 0 .3 1.683l1.873-.705a2.718 2.718 0 0 1-.173-.969l-2-.01Zm.3 1.683c.203.536.502 1.03.885 1.449l1.477-1.349a2.5 2.5 0 0 1-.49-.805l-1.871.705Zm.885 1.449c.383.42.843.758 1.356.992l.83-1.82a2.192 2.192 0 0 1-.709-.52l-1.477 1.348Zm1.356.992a3.98 3.98 0 0 0 1.63.36l.01-2a1.983 1.983 0 0 1-.81-.18l-.83 1.82Zm1.63.36c1.139.006 2.216-.48 2.999-1.32l-1.463-1.363a2.07 2.07 0 0 1-1.525.683l-.011 2Zm2.999-1.32a4.611 4.611 0 0 0 1.215-3.119l-2-.01a2.612 2.612 0 0 1-.678 1.766l1.463 1.363Zm1.215-3.124v-.035h-2v.035h2Z"
                                fill="#000"
                                mask="url(#a)"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.textfield}>
                    <textarea
                        placeholder="Type something..."
                        rows={5}
                        value={inputValue}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>

                <div className={styles["buttons-container"]}>
                    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.9998 33.25C33.21 33.25 35.3296 32.372 36.8924 30.8092C38.4552 29.2464 39.3332 27.1268 39.3332 24.9167V14.5C39.3332 12.2899 38.4552 10.1702 36.8924 8.60743C35.3296 7.04463 33.21 6.16666 30.9998 6.16666C28.7897 6.16666 26.6701 7.04463 25.1073 8.60743C23.5445 10.1702 22.6665 12.2899 22.6665 14.5V24.9167C22.6665 27.1268 23.5445 29.2464 25.1073 30.8092C26.6701 32.372 28.7897 33.25 30.9998 33.25ZM26.8332 14.5C26.8332 13.3949 27.2722 12.3351 28.0536 11.5537C28.835 10.7723 29.8948 10.3333 30.9998 10.3333C32.1049 10.3333 33.1647 10.7723 33.9461 11.5537C34.7275 12.3351 35.1665 13.3949 35.1665 14.5V24.9167C35.1665 26.0217 34.7275 27.0815 33.9461 27.8629C33.1647 28.6443 32.1049 29.0833 30.9998 29.0833C29.8948 29.0833 28.835 28.6443 28.0536 27.8629C27.2722 27.0815 26.8332 26.0217 26.8332 24.9167V14.5Z"
                            fill="black"
                        />
                        <path
                            d="M45.5832 24.9167C45.5832 24.3641 45.3637 23.8342 44.973 23.4435C44.5823 23.0528 44.0524 22.8333 43.4998 22.8333C42.9473 22.8333 42.4174 23.0528 42.0267 23.4435C41.636 23.8342 41.4165 24.3641 41.4165 24.9167C41.4165 27.6793 40.319 30.3289 38.3655 32.2824C36.412 34.2359 33.7625 35.3333 30.9998 35.3333C28.2372 35.3333 25.5876 34.2359 23.6341 32.2824C21.6806 30.3289 20.5832 27.6793 20.5832 24.9167C20.5832 24.3641 20.3637 23.8342 19.973 23.4435C19.5823 23.0528 19.0524 22.8333 18.4998 22.8333C17.9473 22.8333 17.4174 23.0528 17.0267 23.4435C16.636 23.8342 16.4165 24.3641 16.4165 24.9167C16.4206 28.4205 17.6861 31.8058 19.9815 34.4531C22.2768 37.1004 25.4486 38.8328 28.9165 39.3333V43.6667H24.5207C24.0289 43.6667 23.5573 43.862 23.2096 44.2097C22.8619 44.5575 22.6665 45.0291 22.6665 45.5208V45.9792C22.6665 46.4709 22.8619 46.9425 23.2096 47.2903C23.5573 47.638 24.0289 47.8333 24.5207 47.8333H37.479C37.9708 47.8333 38.4424 47.638 38.7901 47.2903C39.1378 46.9425 39.3332 46.4709 39.3332 45.9792V45.5208C39.3332 45.0291 39.1378 44.5575 38.7901 44.2097C38.4424 43.862 37.9708 43.6667 37.479 43.6667H33.0832V39.3333C36.5511 38.8328 39.7229 37.1004 42.0182 34.4531C44.3136 31.8058 45.5791 28.4205 45.5832 24.9167Z"
                            fill="black"
                        />
                        <g filter="url(#filter0_d_1_452)">
                            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1_452"
                                x="0"
                                y="0"
                                width="62"
                                height="62"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_452" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_452"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>

                    <svg
                        onClick={saveNote}
                        width="62"
                        height="62"
                        viewBox="0 0 62 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_1_475)">
                            <g filter="url(#filter0_d_1_475)">
                                <path
                                    d="M30.9999 13.1607V40.8393M17.1606 27H44.8392"
                                    stroke="black"
                                    strokeWidth="3.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    shapeRendering="crispEdges"
                                />
                            </g>
                        </g>
                        <g filter="url(#filter1_d_1_475)">
                            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" shapeRendering="crispEdges" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1_475"
                                x="11.5981"
                                y="11.5982"
                                width="38.8037"
                                height="38.8036"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_475" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_475"
                                    result="shape"
                                />
                            </filter>
                            <filter
                                id="filter1_d_1_475"
                                x="0"
                                y="0"
                                width="62"
                                height="62"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_475" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_475"
                                    result="shape"
                                />
                            </filter>
                            <clipPath id="clip0_1_475">
                                <rect
                                    width="31.6327"
                                    height="31.6327"
                                    fill="white"
                                    transform="translate(15.1836 11.1837)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
