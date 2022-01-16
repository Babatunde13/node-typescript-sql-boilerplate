import { config } from 'dotenv'

config()

export default {
    port: parseInt(process.env.PORT || '3000'),
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432'),
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
        name: process.env.DB_NAME || 'test',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: (process.env.DB_TYPE || 'postgres') as any,
        url: process.env.DB_URL || '',
    },
    swapiBaseUrl: process.env.SWAPI_BASE_URL || 'https://swapi.dev/api/',
    env: process.env.NODE_ENV || 'development',
}
