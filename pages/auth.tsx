import dynamic from "next/dynamic";

const AuthPage = dynamic(async () => await import("../src/pages/auth/AuthPage"), { ssr: false });

const Auth = () => <AuthPage />;

export default Auth;
