import { ReqWithParams, BaseRes } from './base_request.ctrl.contract'
import { User } from '../entities/users.entities'

export interface ClientReq {
    query: {
        limit: string
    }
}

export type ClientRes = User[]

export type Req = ReqWithParams<ClientReq>
export type Res = BaseRes<ClientRes>
