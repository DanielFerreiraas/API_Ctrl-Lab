import { schedule } from "../../../../../modules/schedule/database/repositories/entities/schedule.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Laboratory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    src: string;

    @Column({nullable: true})
    location: string;

    @Column({nullable: true})
    hourOpen: string;

    @Column({nullable: true})
    hourClose: string;

    @OneToMany(() => schedule, (schedule) => schedule.laboratoryId)
    schedules: schedule

}