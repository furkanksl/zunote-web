import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("../src/pages/home/HomePage"), { ssr: false });

function Home() {
    return <HomePage />;
}

export default Home;
