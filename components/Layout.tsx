import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header";

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>ZU NOTE</title>
                <link rel="icon" href="./favicon.svg" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=optional" rel="stylesheet" />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;
