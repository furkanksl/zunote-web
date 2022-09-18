import React from "react";
import SvgComponentProp from "../../src/models/types/SvgComponentProp";

const CategoryBlackSvgComponent = (props: SvgComponentProp) => {
    return (
        <svg
            onClick={props.function}
            width="37"
            height="37"
            viewBox="0 -1 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1_383)">
                <path
                    d="M15.2778 0H5.61111C5.18382 0 4.77403 0.169741 4.47188 0.471883C4.16974 0.774025 4 1.18382 4 1.61111V11.2778C4 11.7051 4.16974 12.1149 4.47188 12.417C4.77403 12.7191 5.18382 12.8889 5.61111 12.8889H15.2778C15.7051 12.8889 16.1149 12.7191 16.417 12.417C16.7191 12.1149 16.8889 11.7051 16.8889 11.2778V1.61111C16.8889 1.18382 16.7191 0.774025 16.417 0.471883C16.1149 0.169741 15.7051 0 15.2778 0ZM13.6667 9.66667H7.22222V3.22222H13.6667V9.66667ZM31.3889 0H21.7222C21.2949 0 20.8851 0.169741 20.583 0.471883C20.2809 0.774025 20.1111 1.18382 20.1111 1.61111V11.2778C20.1111 11.7051 20.2809 12.1149 20.583 12.417C20.8851 12.7191 21.2949 12.8889 21.7222 12.8889H31.3889C31.8162 12.8889 32.226 12.7191 32.5281 12.417C32.8303 12.1149 33 11.7051 33 11.2778V1.61111C33 1.18382 32.8303 0.774025 32.5281 0.471883C32.226 0.169741 31.8162 0 31.3889 0ZM29.7778 9.66667H23.3333V3.22222H29.7778V9.66667ZM15.2778 16.1111H5.61111C5.18382 16.1111 4.77403 16.2809 4.47188 16.583C4.16974 16.8851 4 17.2949 4 17.7222V27.3889C4 27.8162 4.16974 28.226 4.47188 28.5281C4.77403 28.8303 5.18382 29 5.61111 29H15.2778C15.7051 29 16.1149 28.8303 16.417 28.5281C16.7191 28.226 16.8889 27.8162 16.8889 27.3889V17.7222C16.8889 17.2949 16.7191 16.8851 16.417 16.583C16.1149 16.2809 15.7051 16.1111 15.2778 16.1111ZM13.6667 25.7778H7.22222V19.3333H13.6667V25.7778ZM26.5556 16.1111C23.0014 16.1111 20.1111 19.0014 20.1111 22.5556C20.1111 26.1097 23.0014 29 26.5556 29C30.1097 29 33 26.1097 33 22.5556C33 19.0014 30.1097 16.1111 26.5556 16.1111ZM26.5556 25.7778C24.7785 25.7778 23.3333 24.3326 23.3333 22.5556C23.3333 20.7785 24.7785 19.3333 26.5556 19.3333C28.3326 19.3333 29.7778 20.7785 29.7778 22.5556C29.7778 24.3326 28.3326 25.7778 26.5556 25.7778Z"
                    fill="black"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_383"
                    x="0"
                    y="0"
                    width="37"
                    height="37"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_383" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_383" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default CategoryBlackSvgComponent;
