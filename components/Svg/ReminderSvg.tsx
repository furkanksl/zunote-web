import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const ReminderSvgComponent = (props: SvgComponentProp) => (
    <svg
        onClick={props.function}
        width="27"
        height="39"
        viewBox="0 -2 34 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_d_1_418)">
            <mask
                id="path-1-outside-1_1_418"
                maskUnits="userSpaceOnUse"
                x="4"
                y="0"
                width="26"
                height="31"
                fill="black"
            >
                <rect fill="white" x="4" width="26" height="31" />
                <path d="M26.1133 21.9453V13.603C26.1121 11.3824 25.4207 9.22708 24.1509 7.48484C22.881 5.7426 21.1068 4.51514 19.1144 4.00057V3.26742C19.1044 2.66235 18.8757 2.08572 18.4775 1.66166C18.0793 1.2376 17.5434 1 16.9852 1C16.4271 1 15.8912 1.2376 15.493 1.66166C15.0948 2.08572 14.8661 2.66235 14.8561 3.26742V4.00876C12.8705 4.52917 11.1038 5.75807 9.83985 7.49807C8.5759 9.23806 7.88804 11.3882 7.88673 13.603V21.9453L5 25.0752V26.5206H29V25.0752L26.1133 21.9453ZM13.792 26.5206C13.7898 26.9752 13.8703 27.4258 14.0287 27.8466C14.1871 28.2675 14.4205 28.6504 14.7154 28.9735C15.0103 29.2966 15.3611 29.5535 15.7476 29.7296C16.1341 29.9058 16.5488 29.9976 16.9681 30C17.8148 30.0047 18.6286 29.6445 19.2304 28.9988C19.8322 28.353 20.1727 27.4744 20.1771 26.5564V26.5206" />
            </mask>
            <path
                d="M26.1133 21.9453V13.603C26.1121 11.3824 25.4207 9.22708 24.1509 7.48484C22.881 5.7426 21.1068 4.51514 19.1144 4.00057V3.26742C19.1044 2.66235 18.8757 2.08572 18.4775 1.66166C18.0793 1.2376 17.5434 1 16.9852 1C16.4271 1 15.8912 1.2376 15.493 1.66166C15.0948 2.08572 14.8661 2.66235 14.8561 3.26742V4.00876C12.8705 4.52917 11.1038 5.75807 9.83985 7.49807C8.5759 9.23806 7.88804 11.3882 7.88673 13.603V21.9453L5 25.0752V26.5206H29V25.0752L26.1133 21.9453ZM13.792 26.5206C13.7898 26.9752 13.8703 27.4258 14.0287 27.8466C14.1871 28.2675 14.4205 28.6504 14.7154 28.9735C15.0103 29.2966 15.3611 29.5535 15.7476 29.7296C16.1341 29.9058 16.5488 29.9976 16.9681 30C17.8148 30.0047 18.6286 29.6445 19.2304 28.9988C19.8322 28.353 20.1727 27.4744 20.1771 26.5564V26.5206"
                fill="#FCD36E"
            />
            <path
                d="M26.1133 21.9453H25.1133C25.1133 22.1966 25.2079 22.4386 25.3782 22.6233L26.1133 21.9453ZM26.1133 13.603H27.1133V13.6025L26.1133 13.603ZM19.1144 4.00057H18.1144C18.1144 4.45655 18.4229 4.85478 18.8644 4.9688L19.1144 4.00057ZM19.1144 3.26742H20.1144C20.1144 3.2619 20.1144 3.25638 20.1143 3.25086L19.1144 3.26742ZM14.8561 3.26742L13.8562 3.25086C13.8561 3.25638 13.8561 3.2619 13.8561 3.26742H14.8561ZM14.8561 4.00876L15.1096 4.97609C15.5494 4.86082 15.8561 4.4634 15.8561 4.00876H14.8561ZM7.88673 13.603L6.88673 13.6024V13.603H7.88673ZM7.88673 21.9453L8.62181 22.6233C8.79215 22.4386 8.88673 22.1966 8.88673 21.9453H7.88673ZM5 25.0752L4.26492 24.3972C4.09458 24.5819 4 24.8239 4 25.0752H5ZM5 26.5206H4C4 27.0729 4.44772 27.5206 5 27.5206V26.5206ZM29 26.5206V27.5206C29.5523 27.5206 30 27.0729 30 26.5206H29ZM29 25.0752H30C30 24.8239 29.9054 24.5819 29.7351 24.3972L29 25.0752ZM14.792 26.5254C14.7946 25.9731 14.349 25.5233 13.7968 25.5207C13.2445 25.518 12.7946 25.9636 12.792 26.5159L14.792 26.5254ZM16.9681 30L16.9737 29L16.9681 30ZM20.1771 26.5564L21.1771 26.5611V26.5564H20.1771ZM21.1771 26.5206C21.1771 25.9684 20.7294 25.5206 20.1771 25.5206C19.6248 25.5206 19.1771 25.9684 19.1771 26.5206H21.1771ZM27.1133 21.9453V13.603H25.1133V21.9453H27.1133ZM27.1133 13.6025C27.112 11.1772 26.3574 8.8144 24.959 6.89583L23.3428 8.07385C24.4841 9.63975 25.1122 11.5877 25.1133 13.6036L27.1133 13.6025ZM24.959 6.89583C23.5597 4.97602 21.5925 3.60777 19.3645 3.03234L18.8644 4.9688C20.621 5.4225 22.2023 6.50918 23.3428 8.07385L24.959 6.89583ZM20.1144 4.00057V3.26742H18.1144V4.00057H20.1144ZM20.1143 3.25086C20.1003 2.40821 19.7822 1.5903 19.2064 0.977128L17.7485 2.3462C17.9691 2.58115 18.1085 2.91648 18.1146 3.28398L20.1143 3.25086ZM19.2064 0.977128C18.6282 0.361345 17.8324 0 16.9852 0V2C17.2544 2 17.5303 2.11386 17.7485 2.3462L19.2064 0.977128ZM16.9852 0C16.1381 0 15.3423 0.361344 14.764 0.977128L16.222 2.3462C16.4402 2.11386 16.7161 2 16.9852 2V0ZM14.764 0.977128C14.1883 1.5903 13.8702 2.40821 13.8562 3.25086L15.8559 3.28398C15.862 2.91648 16.0014 2.58115 16.222 2.3462L14.764 0.977128ZM13.8561 3.26742V4.00876H15.8561V3.26742H13.8561ZM14.6025 3.04143C12.3822 3.62337 10.4235 4.9931 9.03078 6.91035L10.6489 8.08578C11.7841 6.52305 13.3587 5.43498 15.1096 4.97609L14.6025 3.04143ZM9.03078 6.91035C7.63895 8.8264 6.88816 11.1834 6.88673 13.6024L8.88673 13.6036C8.88791 11.593 9.51285 9.64973 10.6489 8.08578L9.03078 6.91035ZM6.88673 13.603V21.9453H8.88673V13.603H6.88673ZM7.15165 21.2673L4.26492 24.3972L5.73508 25.7532L8.62181 22.6233L7.15165 21.2673ZM4 25.0752V26.5206H6V25.0752H4ZM5 27.5206H29V25.5206H5V27.5206ZM30 26.5206V25.0752H28V26.5206H30ZM29.7351 24.3972L26.8484 21.2673L25.3782 22.6233L28.2649 25.7532L29.7351 24.3972ZM12.792 26.5159C12.7893 27.091 12.891 27.6627 13.0928 28.199L14.9646 27.4943C14.8496 27.1888 14.7904 26.8594 14.792 26.5254L12.792 26.5159ZM13.0928 28.199C13.2947 28.7353 13.5939 29.2282 13.9769 29.6477L15.454 28.2993C15.2471 28.0726 15.0796 27.7997 14.9646 27.4943L13.0928 28.199ZM13.9769 29.6477C14.36 30.0674 14.82 30.4059 15.3329 30.6396L16.1622 28.8197C15.9022 28.7012 15.6607 28.5258 15.454 28.2993L13.9769 29.6477ZM15.3329 30.6396C15.8462 30.8735 16.4002 30.9968 16.9625 30.9999L16.9737 29C16.6975 28.9984 16.422 28.938 16.1622 28.8197L15.3329 30.6396ZM16.9625 30.9999C18.1017 31.0063 19.1788 30.5209 19.962 29.6805L18.4988 28.317C18.0783 28.7682 17.5279 29.0031 16.9737 29L16.9625 30.9999ZM19.962 29.6805C20.7426 28.8429 21.1716 27.7195 21.1771 26.5611L19.1771 26.5516C19.1739 27.2293 18.9218 27.8631 18.4988 28.317L19.962 29.6805ZM21.1771 26.5564V26.5206H19.1771V26.5564H21.1771Z"
                fill="black"
                mask="url(#path-1-outside-1_1_418)"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_1_418"
                x="0"
                y="0"
                width="34"
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
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_418" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_418" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default ReminderSvgComponent;
