import CurrentPlan from "./components/CurrentPlan";
import Plans from "./components/Plans";
import styles from "./SubscriptionPage.module.scss";

function SubscriptionPage() {
    const currentPlan: string = "free";

    return (
        <div className={styles["subs-page-wrapper"]}>
            {currentPlan === "free" ? <Plans currentPlan={currentPlan} /> : <CurrentPlan currentPlan={currentPlan} />}
        </div>
    );
}

export default SubscriptionPage;
