import AppStoreSvgComponent from "../../../../components/Svg/AppStoreSvg";
import MetamaskSvgComponent from "../../../../components/Svg/MetamaskSvg";
import PlayStoreSvgComponent from "../../../../components/Svg/PlayStoreSvg";
import PremiumPlanSvgComponent from "../../../../components/Svg/PremiumPlanSvg";
import StandartPlanSvgComponent from "../../../../components/Svg/StandartPlanSvg";
import UpgradeSvgComponent from "../../../../components/Svg/UpgradeSvg";

import styles from "../SubscriptionPage.module.scss";

type Props = {
    currentPlan: string;
};

function Plans(props: Props) {
    const plans = [
        {
            name: "Standart",
            price: 19,
            annual: true,
            items: ["10 mins single recording time", "100 voice notes"],
            icon: <StandartPlanSvgComponent />,
        },
        {
            name: "Premium",
            price: 39,
            annual: true,
            items: ["30 mins single recording time", "Unlimited voice note"],
            icon: <PremiumPlanSvgComponent />,
        },
    ];

    return (
        <>
            <p className={styles["current-plan"]}>
                You currently have a <span>{props.currentPlan}</span> plan.
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
                {plans.map((plan: any, index: number) => {
                    return (
                        <div key={index} className={styles["pland-card"]}>
                            <div>{plan.icon}</div>
                            <p className={styles.name}>{plan.name}</p>
                            <ul className={styles["plan-details"]}>
                                {plan.items.map((item: any, idx: number) => {
                                    return <li key={idx}>{item}</li>;
                                })}
                            </ul>
                            <div className={styles["buy-button"]}>
                                <p className={styles.price}>${plan.price}/annual</p>
                                <div className={styles["upgrade-svg"]}>
                                    <UpgradeSvgComponent />
                                </div>
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
