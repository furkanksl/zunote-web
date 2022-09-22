import PremiumPlanSvgComponent from "../../../../components/Svg/PremiumPlanSvg";
import StandartPlanSvgComponent from "../../../../components/Svg/StandartPlanSvg";

import styles from "../SubscriptionPage.module.scss";

type Props = {
    currentPlan: string;
};

function CurrentPlan(props: Props) {
    return (
        <>
            <p className={styles["current-plan"]}>
                You currently have a <span>{props.currentPlan}</span> plan.
            </p>

            <div className={styles["current-plan-card"]}>
                {props.currentPlan === "premium" ? (
                    <PremiumPlanSvgComponent />
                ) : props.currentPlan === "standart" ? (
                    <StandartPlanSvgComponent />
                ) : null}
            </div>
        </>
    );
}

export default CurrentPlan;
