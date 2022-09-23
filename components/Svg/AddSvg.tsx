import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const AddSvgCompoenent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_179_160)">
            <circle cx="31" cy="27" r="25" fill="#FCD36E" />
            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" />
        </g>
        <g clipPath="url(#clip0_179_160)">
            <g filter="url(#filter1_d_179_160)">
                <path
                    d="M31 13.1607V40.8393M17.1607 27H44.8393"
                    stroke="black"
                    strokeWidth="3.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    shapeRendering="crispEdges"
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_d_179_160"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_160" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_160" result="shape" />
            </filter>
            <filter
                id="filter1_d_179_160"
                x="11.5982"
                y="11.5982"
                width="38.8036"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_160" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_160" result="shape" />
            </filter>
            <clipPath id="clip0_179_160">
                <rect width="31.6327" height="31.6327" fill="white" transform="translate(15.1837 11.1837)" />
            </clipPath>
        </defs>
    </svg>
);

export default AddSvgCompoenent;
