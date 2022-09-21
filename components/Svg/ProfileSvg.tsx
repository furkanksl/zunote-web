type Props = {
    className: any;
};

const ProfileSvgComponent = (props: Props) => (
    <svg
        className={props.className}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_20)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.3332 16.75C35.3332 18.9602 34.4553 21.0798 32.8925 22.6426C31.3297 24.2054 29.21 25.0834 26.9999 25.0834C24.7898 25.0834 22.6701 24.2054 21.1073 22.6426C19.5445 21.0798 18.6666 18.9602 18.6666 16.75C18.6666 14.5399 19.5445 12.4203 21.1073 10.8575C22.6701 9.29466 24.7898 8.41669 26.9999 8.41669C29.21 8.41669 31.3297 9.29466 32.8925 10.8575C34.4553 12.4203 35.3332 14.5399 35.3332 16.75ZM31.1666 16.75C31.1666 17.8551 30.7276 18.9149 29.9462 19.6963C29.1648 20.4777 28.105 20.9167 26.9999 20.9167C25.8948 20.9167 24.835 20.4777 24.0536 19.6963C23.2722 18.9149 22.8332 17.8551 22.8332 16.75C22.8332 15.645 23.2722 14.5851 24.0536 13.8037C24.835 13.0223 25.8948 12.5834 26.9999 12.5834C28.105 12.5834 29.1648 13.0223 29.9462 13.8037C30.7276 14.5851 31.1666 15.645 31.1666 16.75Z"
                fill="black"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.9999 0.0833435C14.3437 0.0833435 4.08325 10.3438 4.08325 23C4.08325 35.6563 14.3437 45.9167 26.9999 45.9167C39.6562 45.9167 49.9166 35.6563 49.9166 23C49.9166 10.3438 39.6562 0.0833435 26.9999 0.0833435ZM8.24992 23C8.24992 27.3542 9.73533 31.3625 12.2249 34.5458C13.9733 32.2498 16.2289 30.3891 18.8154 29.109C21.4019 27.8289 24.2494 27.1642 27.1353 27.1667C29.9839 27.164 32.7956 27.8115 35.356 29.06C37.9165 30.3084 40.1582 32.1248 41.9103 34.3708C43.7154 32.0033 44.9308 29.24 45.4559 26.3096C45.9811 23.3791 45.8008 20.3657 44.9301 17.5187C44.0594 14.6717 42.5233 12.073 40.4488 9.93759C38.3744 7.80215 35.8213 6.19138 33.0007 5.23857C30.1802 4.28576 27.1732 4.01828 24.2288 4.45829C21.2843 4.89829 18.487 6.03312 16.0682 7.76887C13.6494 9.50463 11.6787 11.7914 10.3191 14.44C8.9596 17.0886 8.25029 20.0229 8.24992 23ZM26.9999 41.75C22.6956 41.7565 18.5213 40.2757 15.1833 37.5583C16.5269 35.6349 18.3152 34.0644 20.3962 32.9806C22.4771 31.8968 24.7891 31.3317 27.1353 31.3333C29.4523 31.3315 31.7363 31.8825 33.7977 32.9405C35.859 33.9985 37.6382 35.533 38.9874 37.4167C35.6235 40.2223 31.3803 41.7562 26.9999 41.75Z"
                fill="black"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_1_20"
                x="0.083252"
                y="0.0833435"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_20" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_20" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default ProfileSvgComponent;
