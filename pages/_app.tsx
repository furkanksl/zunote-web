import "../src/styles/globals.scss";
import "react-h5-audio-player/src/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../src/redux/store/store";
import FirebaseService from "../src/services/firebase/firebase.service";
import ProtectedRoute from "../components/ProtectedRoute";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const firebaseService = new FirebaseService();
    const router = useRouter();
    const noAuthRequiredRoutes = ["/auth"];

    return (
        <>
            {noAuthRequiredRoutes.includes(router.pathname) ? (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            ) : (
                <ProtectedRoute>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ProtectedRoute>
            )}
        </>
    );
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
