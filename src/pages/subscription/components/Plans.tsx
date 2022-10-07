import { useState } from "react";
import AppStoreSvgComponent from "../../../../components/Svg/AppStoreSvg";
import LoadingSvgComponent from "../../../../components/Svg/LoadingSvg";
import MetamaskSvgComponent from "../../../../components/Svg/MetamaskSvg";
import PlayStoreSvgComponent from "../../../../components/Svg/PlayStoreSvg";
import UpgradeSvgComponent from "../../../../components/Svg/UpgradeSvg";
import { WalletService } from "../../../services/wallet.service";
import { subscriptionPlans } from "../const/subscriptionPlans";

import styles from "../SubscriptionPage.module.scss";

function Plans() {
    const walletService = new WalletService();
    const [isLoading, setIsLoading] = useState([false, false]);

    return (
        <>
            <p className={styles["current-plan"]}>
                You currently have a <span>Free</span> plan.
            </p>
            <ul className={styles["plan-details"]}>
                <li>3 mins single recording time</li>
                <li>10 voice note</li>
            </ul>
            <div className={styles["metamask-info-container"]}>
                <MetamaskSvgComponent />
                <p>Make sure you have installed metamask to make the payment.</p>
            </div>

            <div className={styles["plans-container"]}>
                {subscriptionPlans.map((plan: any, index: number) => {
                    return (
                        <div key={index} className={styles["pland-card"]}>
                            <div>
                                <>{plan.icon}</>
                            </div>
                            <p className={styles.name}>{plan.name}</p>
                            <ul className={styles["plan-details"]}>
                                {plan.items.map((item: any, idx: number) => {
                                    return <li key={idx}>{item}</li>;
                                })}
                            </ul>
                            <div
                                className={styles["buy-button"]}
                                onClick={async () => {
                                    setIsLoading([index === 0, index === 1]);
                                    await walletService.sendTransaction(plan.name, plan.planPrice, plan.planId);
                                    setIsLoading([false, false]);
                                }}
                            >
                                <p className={styles.price}>${plan.price}/annual</p>
                                {!isLoading[index] ? (
                                    <div className={styles["upgrade-svg"]}>
                                        <UpgradeSvgComponent />
                                    </div>
                                ) : (
                                    <LoadingSvgComponent />
                                )}
                                <p className={styles.upgrade}>{"Upgrade to " + plan.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className={styles["mobile-text"]}>You can also upgrade from mobile app.</p>
            <div className={styles["mobile-links"]}>
                <PlayStoreSvgComponent />
                <AppStoreSvgComponent />
            </div>
        </>
    );
}

export default Plans;
