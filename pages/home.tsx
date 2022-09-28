import dynamic from "next/dynamic";

const HomePage = dynamic(async () => await import("../src/pages/home/HomePage"), { ssr: false });

const Home = () => <HomePage />;

export default Home;
