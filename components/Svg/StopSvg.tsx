import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const StopSvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_260)">
            <circle cx="31" cy="27" r="26" stroke="black" strokeWidth="2" shapeRendering="crispEdges" />
        </g>
        <path
            d="M39.5556 15H22.4444C21.0944 15 20 16.0944 20 17.4444V34.5556C20 35.9056 21.0944 37 22.4444 37H39.5556C40.9056 37 42 35.9056 42 34.5556V17.4444C42 16.0944 40.9056 15 39.5556 15Z"
            stroke="black"
            strokeWidth="4.16667"
        />
        <defs>
            <filter
                id="filter0_d_1_260"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_260" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_260" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default StopSvgComponent;
