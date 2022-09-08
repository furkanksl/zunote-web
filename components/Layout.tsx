import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header/Header";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>ZU NOTE</title>
                <link rel="icon" href="./favicon.svg" />{" "}
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;
