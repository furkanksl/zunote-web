import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const PauseSvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_215)">
            <circle cx="31" cy="27" r="25" fill="#FCD36E" />
            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" />
        </g>
        <path d="M23 16V38M39 16V38" stroke="black" strokeWidth="4.16667" strokeLinecap="round" />
        <defs>
            <filter
                id="filter0_d_1_215"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_215" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_215" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default PauseSvgComponent;
