import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const VoiceSvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="39"
        height="30"
        viewBox="6 0 27 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_381)">
            <path
                d="M19.5 6.8V24.2M15.15 11.15V19.85M28.2 14.05V16.95M10.8 14.05V16.95M23.85 8.25V22.75M19.5 30C27.5084 30 34 23.5084 34 15.5C34 7.49165 27.5084 1 19.5 1C11.4916 1 5 7.49165 5 15.5C5 23.5084 11.4916 30 19.5 30Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_1_381"
                x="0"
                y="0"
                width="39"
                height="39"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_381" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_381" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default VoiceSvgComponent;
