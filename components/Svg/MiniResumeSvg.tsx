import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const MiniPauseSvgComponent = (props: any) => (
    <svg
        onClick={(event: any) => props.function(event)}
        width="35"
        height="35"
        viewBox="0 -2 35 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_114_16)">
            <circle cx="17.5" cy="13.5" r="13" stroke="black" shapeRendering="crispEdges" />
        </g>
        <path d="M13.5 8V19M21.5 8V19" stroke="black" strokeLinecap="round" />
        <defs>
            <filter
                id="filter0_d_114_16"
                x="0"
                y="0"
                width="35"
                height="35"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_16" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_16" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default MiniPauseSvgComponent;
