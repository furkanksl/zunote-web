import Link from "next/link";
import React, { useState } from "react";
import LogoSvgComponent from "../components/Svg/LogoSvg";
import styles from "../src/styles/auth.module.scss";

function AuthPage() {
    const [toggleIndex, setToggleIndex] = useState(0);

    function changePageIndex(index: number) {
        setToggleIndex(index);
    }

    return (
        <div className={styles["aut-page-wrapper"]}>
            <LogoSvgComponent className={styles.logo} />
            <div className={styles["page-toggle"]}>
                <div
                    onClick={() => changePageIndex(0)}
                    className={styles.item + " " + (toggleIndex == 0 ? styles.selected : "")}
                >
                    <p>LOGIN</p>
                </div>
                <div
                    onClick={() => changePageIndex(1)}
                    className={styles.item + " " + (toggleIndex == 1 ? styles.selected : "")}
                >
                    <p>SIGNUP</p>
                </div>
            </div>

            <div className={styles.input}>
                <svg width={29} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.74 7.854c8.269 8.201 8.956 7.909 17.52 0"
                        stroke="#000"
                        strokeWidth={1.042}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24.469 5.135H4.53c-.667 0-1.208.541-1.208 1.209v16.312c0 .668.54 1.209 1.208 1.209H24.47c.667 0 1.208-.541 1.208-1.209V6.344c0-.668-.54-1.209-1.208-1.209Z"
                        stroke="#000"
                        strokeWidth={1.042}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input type="text" placeholder="email" />
            </div>
            <div className={styles.input}>
                <svg width={29} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.5 15.273a1.97 1.97 0 0 0-.99 3.668v2.809h2.005v-2.81a1.98 1.98 0 0 0 .973-1.691v0a1.977 1.977 0 0 0-1.988-1.976v0Z"
                        stroke="#000"
                        strokeWidth={1.042}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21.925 10.736H7.07a2.61 2.61 0 0 0-2.61 2.61v10.325a2.61 2.61 0 0 0 2.61 2.61h14.856a2.61 2.61 0 0 0 2.61-2.61V13.346a2.61 2.61 0 0 0-2.61-2.61ZM8.066 10.736V9.159a6.44 6.44 0 1 1 12.88 0v1.577"
                        stroke="#000"
                        strokeWidth={1.042}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input type="text" placeholder="password" />
            </div>

            {toggleIndex == 1 ? (
                <div className={styles.input}>
                    <svg width={29} height={29} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.5 15.273a1.97 1.97 0 0 0-.99 3.668v2.809h2.005v-2.81a1.98 1.98 0 0 0 .973-1.691v0a1.977 1.977 0 0 0-1.988-1.976v0Z"
                            stroke="#000"
                            strokeWidth={1.042}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21.925 10.736H7.07a2.61 2.61 0 0 0-2.61 2.61v10.325a2.61 2.61 0 0 0 2.61 2.61h14.856a2.61 2.61 0 0 0 2.61-2.61V13.346a2.61 2.61 0 0 0-2.61-2.61ZM8.066 10.736V9.159a6.44 6.44 0 1 1 12.88 0v1.577"
                            stroke="#000"
                            strokeWidth={1.042}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input type="text" placeholder="password again" />
                </div>
            ) : null}
            <Link href={"/"}>
                <div className={styles.button}>
                    <p>Continue</p>
                </div>
            </Link>
        </div>
    );
}

export default AuthPage;
