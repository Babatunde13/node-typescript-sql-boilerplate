import { Req, Res } from '../api_contracts/get_users.ctrl.contract'
import getUserRepository, { User } from '../entities/users.entities';

export default async function getUsersCtrl (req:Req): Res {
    let users: User[]
    if (req.query.limit) {
        users = await getUserRepository().find({
            take: parseInt(req.query.limit)
        })
    } else {
        users = await getUserRepository().find()
    }
    return {
        success: true,
        message: '',
        data: users
    }
}
