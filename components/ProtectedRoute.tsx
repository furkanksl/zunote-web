import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { setUser } from "../src/redux/features/auth.reducer";
import { StateModel } from "../src/redux/store/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: StateModel) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.emailVerified) {
                    dispatch(setUser(user));
                }
            } else {
                dispatch(setUser(null));
                router.replace("/auth");
            }
        });
    }, [user]);

    return <>{user?.emailVerified ? children : null}</>;
};

export default ProtectedRoute;
