import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const PlaySvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_263)">
            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <path
            d="M23 14V39M45 26.5L23 39M45 26.5L23 14"
            stroke="black"
            strokeWidth="4.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <filter
                id="filter0_d_1_263"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_263" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_263" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default PlaySvgComponent;
