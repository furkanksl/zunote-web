type Props = {
    className: any;
    filterId: string;
};

const SubscriptionDropdownSvgComponent = (props: Props) => (
    <svg
        className={props.className}
        width="54"
        height="54"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter={"url(#filter0_d_1_329)" + props.filterId}>
            <path
                d="M9.09569 10.6958L8.49998 9.20832L7.90427 10.6958L6.37498 10.8318L7.53665 11.8865L7.18673 13.4583L8.49998 12.6232L9.81323 13.4583L9.46331 11.8865L10.625 10.8318L9.09569 10.6958ZM4.24998 1.41666H12.75V2.83332H4.24998V1.41666ZM2.83331 4.24999H14.1666V5.66666H2.83331V4.24999Z"
                fill="black"
            />
            <path
                d="M14.1667 8.50001V14.1667H2.83335V8.50001H14.1667ZM14.1667 7.08334H2.83335C2.45763 7.08334 2.0973 7.2326 1.83162 7.49828C1.56594 7.76395 1.41669 8.12429 1.41669 8.50001V14.1667C1.41669 14.5424 1.56594 14.9027 1.83162 15.1684C2.0973 15.4341 2.45763 15.5833 2.83335 15.5833H14.1667C14.5424 15.5833 14.9027 15.4341 15.1684 15.1684C15.4341 14.9027 15.5834 14.5424 15.5834 14.1667V8.50001C15.5834 8.12429 15.4341 7.76395 15.1684 7.49828C14.9027 7.2326 14.5424 7.08334 14.1667 7.08334Z"
                fill="black"
            />
        </g>
        <defs>
            <filter
                id={"filter0_d_1_329" + props.filterId}
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

export default SubscriptionDropdownSvgComponent;
