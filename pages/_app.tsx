import "../src/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";

import type { AppProps } from "next/app";
import { wrapper } from "../src/redux/store/store";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

function MyApp({ Component, pageProps }: AppProps) {
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
