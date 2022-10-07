import PremiumPlanSvgComponent from "../../../../components/Svg/PremiumPlanSvg";
import StandartPlanSvgComponent from "../../../../components/Svg/StandartPlanSvg";
import { subscriptionPlans } from "../const/subscriptionPlans";

import styles from "../SubscriptionPage.module.scss";

type Props = {
    currentPlanId: number;
    currentPlanName: string;
};

function CurrentPlan(props: Props) {
    return (
        <>
            <p className={styles["current-plan"]}>
                You currently have a <span>{props.currentPlanName}</span> plan.
            </p>

            {props.currentPlanId === 0 ? null : (
                <ul className={styles["plan-details"]}>
                    {subscriptionPlans[props.currentPlanId - 1].items.map((item: string, index: number) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            )}

            <div className={styles["current-plan-card"]}>
                {props.currentPlanId === 2 ? (
                    <PremiumPlanSvgComponent />
                ) : props.currentPlanId === 1 ? (
                    <StandartPlanSvgComponent />
                ) : null}
            </div>
        </>
    );
}

export default CurrentPlan;
