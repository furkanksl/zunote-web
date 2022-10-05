const dev = process.env.NODE_ENV !== "production";
export const BASE_API_URL = dev ? process.env.NEXT_PUBLIC_DEV_BASE_API_URL : process.env.NEXT_PUBLIC_PROD_BASE_API_URL;
