import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateModel } from "../src/redux/store/store";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useSelector((state: StateModel) => state.aut.user);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.replace("/auth");
        }
    }, [user]);

    return <>{user ? children : null}</>;
};

export default ProtectedRoute;
