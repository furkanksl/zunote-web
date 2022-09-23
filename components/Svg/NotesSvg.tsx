type Props = {
    className: any;
    filterId: string;
};

const NotesSvgComponent = (props: Props) => (
    <svg
        className={props.className}
        width="46"
        height="50"
        viewBox="-2 -2 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter={"url(#filter0_d_1_16)" + props.filterId}>
            <path
                d="M6.33337 6.33332V39.6667C6.33337 40.7717 6.77236 41.8315 7.55376 42.6129C8.33516 43.3943 9.39497 43.8333 10.5 43.8333H35.5C36.6051 43.8333 37.6649 43.3943 38.4463 42.6129C39.2277 41.8315 39.6667 40.7717 39.6667 39.6667V15.3792C39.6666 14.8241 39.5557 14.2746 39.3403 13.763C39.1249 13.2514 38.8095 12.788 38.4125 12.4L29.1625 3.35416C28.3841 2.59303 27.3387 2.16679 26.25 2.16666H10.5C9.39497 2.16666 8.33516 2.60564 7.55376 3.38704C6.77236 4.16845 6.33337 5.22825 6.33337 6.33332V6.33332Z"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.1667 2.16666V10.5C27.1667 11.6051 27.6057 12.6649 28.3871 13.4463C29.1685 14.2277 30.2283 14.6667 31.3334 14.6667H39.6667"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <filter
                id={"filter0_d_1_16" + props.filterId}
                x="0.250046"
                y="0.083313"
                width="45.5"
                height="53.8333"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_16" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_16" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default NotesSvgComponent;
