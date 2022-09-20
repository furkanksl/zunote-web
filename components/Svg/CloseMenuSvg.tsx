const CloseMenuSvgComponent = () => (
    <svg style={{ marginTop: "-3px" }} width={49} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#a1123123)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.751 20 4 36.751 7.249 40 24 23.249 40.751 40 44 36.751 27.249 20 44 3.249 40.751 0 24 16.751 7.249 0 4 3.249 20.751 20Z"
                fill="#000"
            />
        </g>
        <defs>
            <filter
                id="a1123123"
                x={0}
                y={0}
                width={48}
                height={48}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_8_1448" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_1448" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default CloseMenuSvgComponent;
