import { Entity, Column, getRepository } from 'typeorm'
import BaseEntity from './base_entity.entities'

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

enum Role {
    ADMIN = 'admin',
    USER = 'user',
}
