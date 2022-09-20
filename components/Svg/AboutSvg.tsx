type Props = {
    className: any;
    filterId: string;
};

const AboutSvgComponent = (props: Props) => (
    <svg
        className={props.className}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter={"url(#filter0_d_1_32)" + props.filterId}>
            <path
                d="M27 43.8333C38.506 43.8333 47.8334 34.5059 47.8334 23C47.8334 11.4941 38.506 2.16666 27 2.16666C15.4941 2.16666 6.16669 11.4941 6.16669 23C6.16669 34.5059 15.4941 43.8333 27 43.8333Z"
                stroke="black"
                strokeWidth="4.16667"
            />
            <path d="M27 12.5833H27.0209" stroke="black" strokeWidth="4.16667" strokeLinecap="round" />
            <path
                d="M22.8333 20.9167H27V31.3333M22.8333 31.3333H31.1667"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <defs>
            <filter
                id={"filter0_d_1_32" + props.filterId}
                x="0.0833435"
                y="0.083313"
                width="53.8333"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_32" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_32" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default AboutSvgComponent;
