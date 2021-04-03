import * as dotenv from 'dotenv'
dotenv.config();
// so we dont have to call process.env multiple times
export const __prod__ = process.env.NODE_ENV !== 'production'
export const __dbName__ = process.env.DB_NAME
export const __dbType__ = process.env.DB_TYPE
export const __dbHost__ = process.env.DB_HOST
export const __clientUrl__ = process.env.DATABASE_URL