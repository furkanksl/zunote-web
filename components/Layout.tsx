import Head from "next/head";
import React, { ReactNode } from "react";
import AddCategoryDialog from "./Dialogs/Category/AddCategoryDialog";
import SelectCategoryDialog from "./Dialogs/Category/SelectCategoryDialog";
import Header from "./Header/Header";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

function Layout({ children }: { children: ReactNode }) {
    const router = useRouter();

    function checkPagePath(path: string): boolean {
        return path === router.pathname;
    }

    return (
        <>
            <Head>
                <title>ZU NOTE</title>
                <link rel="icon" href="./favicon.svg" />{" "}
            </Head>
            <Header />
            <main className={checkPagePath("/auth") ? " remove-mt" : ""}>{children}</main>
            <SelectCategoryDialog />
            <AddCategoryDialog />
            <ToastContainer theme="colored" autoClose={2500} limit={1} />
        </>
    );
}

export default Layout;
