import { User } from "@/modules/auth/user/database/repositories/impl/typeorm/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Pictures {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    src: string;

    @OneToMany(() => User, (user) => user.picturesId)
    user: User
}