import "../src/styles/globals.scss";
import "react-h5-audio-player/src/styles.scss";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../src/redux/store/store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default wrapper.withRedux(MyApp);
// export default MyApp;
