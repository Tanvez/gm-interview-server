import * as dotenv from 'dotenv'
dotenv.config();
// so we dont have to call process.env multiple times
export const __prod__ = process.env.NODE_ENV !== 'production'
export const __url__ = process.env.DATABASE_URL
export const __port__ = process.env.PORT
export const __CORS_URL__ = process.env.CORS_ORIGIN