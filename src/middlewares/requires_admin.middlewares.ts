import { BaseReq, BaseRes } from '../api_contracts/base_request.ctrl.contract';
import { Role } from '../entities/users.entities';

export default async function requiresAdmin (req: BaseReq): BaseRes<null> {
    if (!req.user || req.user.role !== Role.ADMIN) {
        return {
            success: false,
            data: null,
            message: 'You must be admin to do this',
            options: {
                status: 401
            }
        }
    }
}
