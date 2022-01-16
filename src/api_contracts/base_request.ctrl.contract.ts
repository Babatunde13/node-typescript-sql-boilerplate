import { Request } from 'express'

export type BaseReq = Request  & {
    params: { [key: string]: string | undefined }
    query: { [key: string]: string | undefined }
}

export type ReqWithParams<T> = BaseReq & T

type Response<T> =  {
	success: boolean
    message: string
	data: T
    options?: {
        status?: number
        redirect?: string
        sendString?: boolean
    }
}

export type BaseRes<T> = Promise<Response<T> | void>
