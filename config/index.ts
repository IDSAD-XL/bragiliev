const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.DEV_URL : process.env.PROD_URL;