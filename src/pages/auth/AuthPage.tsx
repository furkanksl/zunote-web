import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "redux/features/auth.reducer";
import { auth } from "../../../firebase";

import EmailSvgComponent from "components/Svg/EmailSvg";
import LoadingSvgComponent from "components/Svg/LoadingSvg";
import LogoSvgComponent from "components/Svg/LogoSvg";
import PasswordSvgComponent from "components/Svg/PasswordSvg";

import FirebaseService from "services/firebase/firebase.service";
import UtilityService from "services/utility.service";

import styles from "./AuthPage.module.scss";

function AuthPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const firebaseService = new FirebaseService();
    const utilityService = new UtilityService();

    const [toggleIndex, setToggleIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passAgain, setPassAgain] = useState("");

    function changePageIndex(index: number) {
        setToggleIndex(index);
    }

    function clearPassFields() {
        setPass("");
        setPassAgain("");
    }

    function checkInputField() {
        if (toggleIndex == 0) {
            if (email === "" || pass === "") {
                toast.error("Please fill the all inputs!", { icon: "😬" });
                return false;
            } else if (pass.length <= 5) {
                toast.error("Password should be at least 6 characters");
                return false;
            }
        } else {
            if (email === "" || pass === "" || passAgain === "") {
                toast.error("Please fill the all inputs!", { icon: "😬" });
                return false;
            } else if (pass !== passAgain) {
                toast.error("Passwords are not matching!", {
                    icon: "😱",
                });
                return false;
            } else if (pass.length <= 5) {
                toast.error("Password should be at least 6 characters", {
                    icon: "😡",
                });
                return false;
            }
        }

        if (!utilityService.validateEmail(email)) {
            toast.error("Please type a valid email!");
            return false;
        }

        return true;
    }

    async function onContinue() {
        setIsLoading(true);

        if (!checkInputField()) {
            setIsLoading(false);
            return;
        }

        if (toggleIndex == 0) {
            const result: boolean = await firebaseService.login(email, pass);
            if (result) {
                dispatch(setUser(auth.currentUser));
                router.push("/home");
            } else {
                clearPassFields();
            }
        } else {
            const result: boolean = await firebaseService.signup(email, pass);
            clearPassFields();
            if (result) setToggleIndex(0);
        }

        setIsLoading(false);
    }

    return (
        <div className={styles["aut-page-wrapper"]}>
            <LogoSvgComponent className={styles.logo} />
            <div className={styles["page-toggle"]}>
                <div
                    onClick={() => (isLoading ? null : changePageIndex(0))}
                    className={
                        styles.item +
                        (toggleIndex == 0 ? " " + styles.selected : "") +
                        (isLoading ? " " + styles.cease : "")
                    }
                >
                    <p>LOGIN</p>
                </div>
                <div
                    onClick={() => (isLoading ? null : changePageIndex(1))}
                    className={
                        styles.item +
                        (toggleIndex == 1 ? " " + styles.selected : "") +
                        (isLoading ? " " + styles.cease : "")
                    }
                >
                    <p>SIGNUP</p>
                </div>
            </div>

            <div className={styles.input}>
                <EmailSvgComponent />
                <input type="text" value={email} placeholder="email" onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <div className={styles.input}>
                <PasswordSvgComponent />
                <input
                    type="password"
                    value={pass}
                    placeholder="password"
                    onChange={(e: any) => setPass(e.target.value)}
                />
            </div>

            {toggleIndex == 1 ? (
                <div className={styles.input}>
                    <PasswordSvgComponent />
                    <input
                        type="password"
                        value={passAgain}
                        placeholder="password again"
                        onChange={(e: any) => setPassAgain(e.target.value)}
                    />
                </div>
            ) : null}
            <div
                className={styles.button + (isLoading ? " " + styles.loading : "")}
                onClick={async () => await onContinue()}
            >
                {isLoading ? <LoadingSvgComponent /> : <p>Continue</p>}
            </div>
        </div>
    );
}

export default AuthPage;
