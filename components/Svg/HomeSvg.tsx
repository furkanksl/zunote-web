type Props = {
    className: any;
    filterId: string;
};

const HomeSvgComponent = (props: Props) => (
    <svg
        className={props.className}
        width="55"
        height="56"
        viewBox="0 0 55 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter={"url(#filter0_d_1_309)" + props.filterId}>
            <path
                d="M48.6667 41.0181V24.7139C48.6668 23.5796 48.4353 22.4572 47.9865 21.4155C47.5376 20.3737 46.8808 19.4346 46.0562 18.6556L30.6958 4.13893C29.9222 3.40753 28.898 3 27.8333 3C26.7687 3 25.7445 3.40753 24.9708 4.13893L9.61042 18.6556C8.78588 19.4346 8.12907 20.3737 7.6802 21.4155C7.23134 22.4572 6.99988 23.5796 7 24.7139V41.0181C7 42.1232 7.43899 43.183 8.22039 43.9644C9.00179 44.7458 10.0616 45.1848 11.1667 45.1848H44.5C45.6051 45.1848 46.6649 44.7458 47.4463 43.9644C48.2277 43.183 48.6667 42.1232 48.6667 41.0181Z"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
            />
        </g>
        <defs>
            <filter
                id={"filter0_d_1_309" + props.filterId}
                x="0.916664"
                y="0.916687"
                width="53.8333"
                height="54.3514"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_309" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_309" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default HomeSvgComponent;
