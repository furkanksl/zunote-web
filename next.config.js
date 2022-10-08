/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    async redirects() {
        return [
            {
                source: "/note-detail",
                destination: "/notes",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
