import React, { useState } from "react";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoSvgComponent from "../Svg/LogoSvg";
import HomeSvgComponent from "../Svg/HomeSvg";
import NotesSvgComponent from "../Svg/NotesSvg";
import AboutSvgComponent from "../Svg/AboutSvg";
import ProfileSvgComponent from "../Svg/ProfileSvg";
import SubscriptionDropdownSvgComponent from "../Svg/SubscriptionDropdownSvg";
import LogoutSvgComponent from "../Svg/LogoutSvg";
import CloseMenuSvgComponent from "../Svg/CloseMenuSvg";
import HamburgerMenuSvgComponent from "../Svg/HamburgerMenuSvg";

function Header() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            route: "/home",
            name: "Home",
            svg: (
                <HomeSvgComponent
                    filterId="1"
                    className={checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : ""}
                />
            ),
        },
        {
            route: "/notes",
            name: "Notes",
            svg: (
                <NotesSvgComponent
                    filterId="1"
                    className={checkPageSelected("/notes") ? styles["item-selected"] : ""}
                />
            ),
        },
        {
            route: "/about",
            name: "About",
            svg: (
                <AboutSvgComponent
                    filterId="1"
                    className={checkPageSelected("/about") ? styles["item-selected"] : ""}
                />
            ),
        },
        {
            route: "/subscription",
            name: "Subscription",
            svg: (
                <SubscriptionDropdownSvgComponent
                    filterId="1"
                    className={checkPageSelected("/subscription") ? styles["item-selected"] : ""}
                />
            ),
        },
        {
            route: "/auth",
            name: "Logout",
            svg: <LogoutSvgComponent />,
        },
    ];

    function checkPageSelected(path: string): boolean {
        return path === router.pathname;
    }

    function onMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return checkPageSelected("/auth") ? null : (
        <div className={styles["header-wrapper"]}>
            <Link href={"/"}>
                <div>
                    <LogoSvgComponent className={styles.logo} />
                </div>
            </Link>
            <div className={styles["menu-items"]}>
                <Link href={"/home"}>
                    <div>
                        <HomeSvgComponent
                            filterId="2"
                            className={
                                styles.item +
                                " " +
                                (checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : "")
                            }
                        />
                    </div>
                </Link>
                <Link href={"/notes"}>
                    <div>
                        <NotesSvgComponent
                            filterId="2"
                            className={styles.item + " " + (checkPageSelected("/notes") ? styles["item-selected"] : "")}
                        />
                    </div>
                </Link>
                <Link href={"/about"}>
                    <div>
                        <AboutSvgComponent
                            filterId="2"
                            className={styles.item + " " + (checkPageSelected("/about") ? styles["item-selected"] : "")}
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.profile}>
                <ProfileSvgComponent className={styles.item} />
                <div className={styles["profile-dropdown"]}>
                    <p>abc...@gmal.com</p>
                    <Link href={"/subscription"}>
                        <div className="flex flex-row justify-start items-center mr-auto gap-x-1 cursor-pointer">
                            <SubscriptionDropdownSvgComponent
                                filterId="2"
                                className={checkPageSelected("/subscription") ? styles["item-selected"] : ""}
                            />
                            <p>Subscription</p>
                        </div>
                    </Link>
                    <Link href={"/auth"}>
                        <div className="flex flex-row justify-start items-center mr-auto gap-x-1 cursor-pointer">
                            <LogoutSvgComponent />
                            <p>Logout</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles["mobile-menu-items"]}>
                <Link href={"/home"}>
                    <div>
                        <HomeSvgComponent
                            filterId="3"
                            className={
                                checkPageSelected("/home") || checkPageSelected("/") ? styles["item-selected"] : ""
                            }
                        />
                    </div>
                </Link>
                <div onClick={onMenuToggle}>
                    {isMenuOpen ? <CloseMenuSvgComponent /> : <HamburgerMenuSvgComponent />}
                </div>
            </div>

            {isMenuOpen ? (
                <>
                    <div className={styles["mobile-menu-layer"]} onClick={() => setIsMenuOpen(false)}></div>
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
                </>
            ) : null}
        </div>
    );
}

export default Header;
