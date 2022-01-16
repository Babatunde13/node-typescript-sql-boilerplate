import { createConnection } from 'typeorm'

export const createDbConnection = async () => {
    try {
        const connection = await createConnection()
        return {
            data: connection,
        }
    } catch (e) {
        return {
            error: new Error((e as Error).message)
        }
    }
}
