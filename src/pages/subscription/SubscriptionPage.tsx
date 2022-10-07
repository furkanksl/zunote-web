import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/features/user.reducer";
import { StateModel } from "../../redux/store/store";

import LoadingSvgComponent from "../../../components/Svg/LoadingSvg";
import UserData from "../../models/UserData.model";
import FirebaseService from "../../services/firebase/firebase.service";
import CurrentPlan from "./components/CurrentPlan";
import Plans from "./components/Plans";
import styles from "./SubscriptionPage.module.scss";

function SubscriptionPage() {
    const dispatch = useDispatch();
    const firebaseService = new FirebaseService();
    const userData: UserData = useSelector((state: StateModel) => state.user.userData);

    useEffect(() => {
        if (!userData.planId)
            new Promise(async () => {
                dispatch(setUserData(await firebaseService.getUserData()));
            });
    }, []);

    return userData.planId !== undefined ? (
        <div className={styles["subs-page-wrapper"]}>
            {userData.planId === 0 ? (
                <Plans />
            ) : (
                <CurrentPlan currentPlanId={userData.planId} currentPlanName={userData.planName} />
            )}
        </div>
    ) : (
        <div className={styles.loading}>
            <LoadingSvgComponent />
        </div>
    );
}

export default SubscriptionPage;
