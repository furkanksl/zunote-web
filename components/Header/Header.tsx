import Image from "next/image";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import LocalService from "../../src/services/local.service";

function Header() {
    const localService = new LocalService();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            route: "/home",
            name: "Home",
            svg: (
                <svg
                    className={checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : ""}
                    width="54"
                    height="56"
                    viewBox="0 0 55 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1_3011)">
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
                            id="filter0_d_1_3011"
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
            ),
        },
        {
            route: "/notes",
            name: "Note",
            svg: (
                <svg
                    className={checkPageSelected("/notes") ? styles["item-selected"] : ""}
                    width="54"
                    height="54"
                    viewBox="0 0 46 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1_161)">
                        <path
                            d="M6.33337 6.33332V39.6667C6.33337 40.7717 6.77236 41.8315 7.55376 42.6129C8.33516 43.3943 9.39497 43.8333 10.5 43.8333H35.5C36.6051 43.8333 37.6649 43.3943 38.4463 42.6129C39.2277 41.8315 39.6667 40.7717 39.6667 39.6667V15.3792C39.6666 14.8241 39.5557 14.2746 39.3403 13.763C39.1249 13.2514 38.8095 12.788 38.4125 12.4L29.1625 3.35416C28.3841 2.59303 27.3387 2.16679 26.25 2.16666H10.5C9.39497 2.16666 8.33516 2.60564 7.55376 3.38704C6.77236 4.16845 6.33337 5.22825 6.33337 6.33332V6.33332Z"
                            stroke="black"
                            strokeWidth="4.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M27.1667 2.16666V10.5C27.1667 11.6051 27.6057 12.6649 28.3871 13.4463C29.1685 14.2277 30.2283 14.6667 31.3334 14.6667H39.6667"
                            stroke="black"
                            strokeWidth="4.16667"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_1_161"
                            x="0.250046"
                            y="0.083313"
                            width="45.5"
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
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_16" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_16" result="shape" />
                        </filter>
                    </defs>
                </svg>
            ),
        },
        {
            route: "/about",
            name: "About",
            svg: (
                <svg
                    className={checkPageSelected("/about") ? styles["item-selected"] : ""}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1_321)">
                        <path
                            d="M27 43.8333C38.506 43.8333 47.8334 34.5059 47.8334 23C47.8334 11.4941 38.506 2.16666 27 2.16666C15.4941 2.16666 6.16669 11.4941 6.16669 23C6.16669 34.5059 15.4941 43.8333 27 43.8333Z"
                            stroke="black"
                            strokeWidth="4.16667"
                        />
                        <path d="M27 12.5833H27.0209" stroke="black" strokeWidth="4.16667" strokeLinecap="round" />
                        <path
                            d="M22.8333 20.9167H27V31.3333M22.8333 31.3333H31.1667"
                            stroke="black"
                            strokeWidth="4.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_1_321"
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
            ),
        },
        {
            route: "/subscription",
            name: "Subscription",
            svg: (
                <svg
                    className={checkPageSelected("/subscription") ? styles["item-selected"] : ""}
                    width="54"
                    height="54"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d_1_322)">
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
                            id="filter0_d_1_322"
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
            ),
        },
        {
            route: "/auth",
            name: "Logout",
            svg: (
                <svg width="54" height="54" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.4102 12.1523H13.2431C13.1634 12.1523 13.0887 12.1872 13.0389 12.2486C12.9227 12.3897 12.7981 12.5259 12.667 12.6554C12.1306 13.1923 11.4952 13.6202 10.796 13.9154C10.0716 14.2214 9.29301 14.3784 8.50664 14.3769C7.71143 14.3769 6.94112 14.2209 6.21729 13.9154C5.51808 13.6202 4.8827 13.1923 4.34629 12.6554C3.80892 12.1202 3.38044 11.486 3.08457 10.7877C2.77744 10.0639 2.62305 9.29521 2.62305 8.49999C2.62305 7.70478 2.7791 6.93613 3.08457 6.2123C3.38008 5.51337 3.80508 4.88417 4.34629 4.34462C4.8875 3.80507 5.5167 3.38007 6.21729 3.08456C6.94112 2.7791 7.71143 2.62304 8.50664 2.62304C9.30186 2.62304 10.0722 2.77744 10.796 3.08456C11.4966 3.38007 12.1258 3.80507 12.667 4.34462C12.7981 4.47578 12.921 4.61191 13.0389 4.75136C13.0887 4.81279 13.165 4.84765 13.2431 4.84765H14.4102C14.5147 4.84765 14.5795 4.73144 14.5214 4.64345C13.248 2.66455 11.0201 1.35468 8.48838 1.36132C4.51065 1.37128 1.32149 4.60029 1.36133 8.57304C1.40117 12.4827 4.58536 15.6387 8.50664 15.6387C11.0317 15.6387 13.2497 14.3305 14.5214 12.3565C14.5778 12.2685 14.5147 12.1523 14.4102 12.1523ZM15.886 8.39541L13.5303 6.53603C13.4423 6.4663 13.3145 6.52939 13.3145 6.64062V7.90234H8.10157C8.02852 7.90234 7.96875 7.9621 7.96875 8.03515V8.96484C7.96875 9.03789 8.02852 9.09765 8.10157 9.09765H13.3145V10.3594C13.3145 10.4706 13.4439 10.5337 13.5303 10.464L15.886 8.60458C15.9019 8.59216 15.9148 8.57629 15.9236 8.55817C15.9324 8.54005 15.937 8.52015 15.937 8.49999C15.937 8.47984 15.9324 8.45994 15.9236 8.44182C15.9148 8.4237 15.9019 8.40783 15.886 8.39541Z"
                        fill="black"
                    />
                </svg>
            ),
        },
    ];

    function checkPageSelected(path: string): boolean {
        // console.log(path === router.pathname);
        return path === router.pathname;
    }

    function onMenuToggle() {
        setIsMenuOpen(!isMenuOpen);

        document?.addEventListener(
            "click",
            (e: any) => {
                const hasClickedOutsideOfMobileMenu = localService.clickOutsideHandlerOnMobileMenu(e);
                if (!hasClickedOutsideOfMobileMenu) setIsMenuOpen(false);
            },
            false
        );
    }

    return checkPageSelected("/auth") ? null : (
        <div className={styles["header-wrapper"]}>
            <Link href={"/"}>
                <img className={styles.logo} src="/icons/logo.svg" alt="ZUNOTE LOGO" />
            </Link>
            <div className={styles["menu-items"]}>
                <Link href={"/home"}>
                    <svg
                        className={
                            styles.item +
                            " " +
                            (checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : "")
                        }
                        width="55"
                        height="56"
                        viewBox="0 0 55 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_1_309)">
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
                                id="filter0_d_1_309"
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
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_309"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </Link>
                <Link href={"/notes"}>
                    <svg
                        className={styles.item + " " + (checkPageSelected("/notes") ? styles["item-selected"] : "")}
                        width="46"
                        height="54"
                        viewBox="0 0 46 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_1_16)">
                            <path
                                d="M6.33337 6.33332V39.6667C6.33337 40.7717 6.77236 41.8315 7.55376 42.6129C8.33516 43.3943 9.39497 43.8333 10.5 43.8333H35.5C36.6051 43.8333 37.6649 43.3943 38.4463 42.6129C39.2277 41.8315 39.6667 40.7717 39.6667 39.6667V15.3792C39.6666 14.8241 39.5557 14.2746 39.3403 13.763C39.1249 13.2514 38.8095 12.788 38.4125 12.4L29.1625 3.35416C28.3841 2.59303 27.3387 2.16679 26.25 2.16666H10.5C9.39497 2.16666 8.33516 2.60564 7.55376 3.38704C6.77236 4.16845 6.33337 5.22825 6.33337 6.33332V6.33332Z"
                                stroke="black"
                                strokeWidth="4.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M27.1667 2.16666V10.5C27.1667 11.6051 27.6057 12.6649 28.3871 13.4463C29.1685 14.2277 30.2283 14.6667 31.3334 14.6667H39.6667"
                                stroke="black"
                                strokeWidth="4.16667"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1_16"
                                x="0.250046"
                                y="0.083313"
                                width="45.5"
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
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_16" />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_16"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </Link>
                <Link href={"/about"}>
                    <svg
                        className={styles.item + " " + (checkPageSelected("/about") ? styles["item-selected"] : "")}
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_1_32)">
                            <path
                                d="M27 43.8333C38.506 43.8333 47.8334 34.5059 47.8334 23C47.8334 11.4941 38.506 2.16666 27 2.16666C15.4941 2.16666 6.16669 11.4941 6.16669 23C6.16669 34.5059 15.4941 43.8333 27 43.8333Z"
                                stroke="black"
                                strokeWidth="4.16667"
                            />
                            <path d="M27 12.5833H27.0209" stroke="black" strokeWidth="4.16667" strokeLinecap="round" />
                            <path
                                d="M22.8333 20.9167H27V31.3333M22.8333 31.3333H31.1667"
                                stroke="black"
                                strokeWidth="4.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1_32"
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
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_32"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className={styles.profile}>
                <svg
                    className={styles.item}
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
                <div className={styles["profile-dropdown"]}>
                    <p>abc...@gmal.com</p>
                    <Link href={"/subscription"}>
                        <div className="flex flex-row justify-start items-center mr-auto gap-x-1 cursor-pointer">
                            <svg
                                className={checkPageSelected("/subscription") ? styles["item-selected"] : ""}
                                width="54"
                                height="54"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_d_1_329)">
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
                                        id="filter0_d_1_329"
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
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_1_32"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_32"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <p>Subscription</p>
                        </div>
                    </Link>
                    <Link href={"/auth"}>
                        <div className="flex flex-row justify-start items-center mr-auto gap-x-1 cursor-pointer">
                            <svg
                                width="54"
                                height="54"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.4102 12.1523H13.2431C13.1634 12.1523 13.0887 12.1872 13.0389 12.2486C12.9227 12.3897 12.7981 12.5259 12.667 12.6554C12.1306 13.1923 11.4952 13.6202 10.796 13.9154C10.0716 14.2214 9.29301 14.3784 8.50664 14.3769C7.71143 14.3769 6.94112 14.2209 6.21729 13.9154C5.51808 13.6202 4.8827 13.1923 4.34629 12.6554C3.80892 12.1202 3.38044 11.486 3.08457 10.7877C2.77744 10.0639 2.62305 9.29521 2.62305 8.49999C2.62305 7.70478 2.7791 6.93613 3.08457 6.2123C3.38008 5.51337 3.80508 4.88417 4.34629 4.34462C4.8875 3.80507 5.5167 3.38007 6.21729 3.08456C6.94112 2.7791 7.71143 2.62304 8.50664 2.62304C9.30186 2.62304 10.0722 2.77744 10.796 3.08456C11.4966 3.38007 12.1258 3.80507 12.667 4.34462C12.7981 4.47578 12.921 4.61191 13.0389 4.75136C13.0887 4.81279 13.165 4.84765 13.2431 4.84765H14.4102C14.5147 4.84765 14.5795 4.73144 14.5214 4.64345C13.248 2.66455 11.0201 1.35468 8.48838 1.36132C4.51065 1.37128 1.32149 4.60029 1.36133 8.57304C1.40117 12.4827 4.58536 15.6387 8.50664 15.6387C11.0317 15.6387 13.2497 14.3305 14.5214 12.3565C14.5778 12.2685 14.5147 12.1523 14.4102 12.1523ZM15.886 8.39541L13.5303 6.53603C13.4423 6.4663 13.3145 6.52939 13.3145 6.64062V7.90234H8.10157C8.02852 7.90234 7.96875 7.9621 7.96875 8.03515V8.96484C7.96875 9.03789 8.02852 9.09765 8.10157 9.09765H13.3145V10.3594C13.3145 10.4706 13.4439 10.5337 13.5303 10.464L15.886 8.60458C15.9019 8.59216 15.9148 8.57629 15.9236 8.55817C15.9324 8.54005 15.937 8.52015 15.937 8.49999C15.937 8.47984 15.9324 8.45994 15.9236 8.44182C15.9148 8.4237 15.9019 8.40783 15.886 8.39541Z"
                                    fill="black"
                                />
                            </svg>
                            <p>Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles["mobile-menu-items"]}>
                <Link href={"/home"}>
                    <svg
                        className={checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : ""}
                        width="55"
                        height="56"
                        viewBox="0 0 55 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_1_3011)">
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
                                id="filter0_d_1_3011"
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
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_309"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </Link>
                <div onClick={onMenuToggle}>
                    {isMenuOpen ? (
                        <svg
                            id="close-mobile-menu-button"
                            style={{ marginTop: "-3px" }}
                            width={49}
                            height={48}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#a1)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.751 20 4 36.751 7.249 40 24 23.249 40.751 40 44 36.751 27.249 20 44 3.249 40.751 0 24 16.751 7.249 0 4 3.249 20.751 20Z"
                                    fill="#000"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="a1"
                                    x={0}
                                    y={0}
                                    width={48}
                                    height={48}
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_8_1448" />
                                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_1448" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    ) : (
                        <svg width="49" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_8_1411)">
                                <path
                                    d="M49.54 0H4.46C4.207 0 4 0.204545 4 0.454545V4.09091C4 4.34091 4.207 4.54545 4.46 4.54545H49.54C49.793 4.54545 50 4.34091 50 4.09091V0.454545C50 0.204545 49.793 0 49.54 0ZM49.54 35.4545H4.46C4.207 35.4545 4 35.6591 4 35.9091V39.5455C4 39.7955 4.207 40 4.46 40H49.54C49.793 40 50 39.7955 50 39.5455V35.9091C50 35.6591 49.793 35.4545 49.54 35.4545ZM49.54 17.7273H4.46C4.207 17.7273 4 17.9318 4 18.1818V21.8182C4 22.0682 4.207 22.2727 4.46 22.2727H49.54C49.793 22.2727 50 22.0682 50 21.8182V18.1818C50 17.9318 49.793 17.7273 49.54 17.7273Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_8_1411"
                                    x="0"
                                    y="0"
                                    width="54"
                                    height="48"
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
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_8_1411"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_8_1411"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    )}
                </div>
            </div>

            {isMenuOpen ? (
                <div className={styles.menu} id="mobile-menu">
                    {menuItems.map((item: any, index: number) => {
                        return (
                            <Link href={item.route} key={index}>
                                <div
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex flex-row items-center mr-auto gap-x-3 cursor-pointer"
                                >
                                    {item.svg}
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

export default Header;
