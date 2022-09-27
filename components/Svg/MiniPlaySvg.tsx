import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const MiniPlaySvgComponent = (props: any) => {
    return (
        <svg
            onClick={(event: any) => props.function(event)}
            width="35"
            height="35"
            viewBox="0 -2 35 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_89_3)">
                <circle cx="17.5" cy="13.5" r="13" stroke="black" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter1_d_89_3)">
                <path
                    d="M14 7V19.5M25 13.25L14 19.5M25 13.25L14 7"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    shapeRendering="crispEdges"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_89_3"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89_3" result="shape" />
                </filter>
                <filter
                    id="filter1_d_89_3"
                    x="9.49988"
                    y="6.49988"
                    width="20.0002"
                    height="21.5002"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_89_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_89_3" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default MiniPlaySvgComponent;
