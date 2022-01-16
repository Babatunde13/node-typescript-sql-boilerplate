import { Entity, Column, getRepository, BeforeInsert } from 'typeorm'
import BaseEntity from './base_entity.entities'
import { hashPassword } from '../utils/hash_password.utils'
import isError from '../utils/is_error.utils'

@Entity()
export class User extends BaseEntity {
    @Column()
    firstName: number

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: Role

    @BeforeInsert()
    async hashPassword() {
        const hash = await hashPassword(this.password)
        if (isError(hash)) {
            return
        }
        this.password = hash.data
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
        }
    }
}

export default function getUserRepository() {
    return getRepository<User>(User);
}

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}
