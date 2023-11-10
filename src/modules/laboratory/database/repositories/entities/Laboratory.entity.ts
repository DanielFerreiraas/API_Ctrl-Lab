import { schedule } from "../../../../../modules/schedule/database/repositories/entities/schedule.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Laboratory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    photoLink: string;

    @Column()
    location: string;

    @Column()
    hourOpen: string;

    @Column()
    hourClose: string;

    @OneToMany(() => schedule, (schedule) => schedule.laboratoryId)
    schedules: schedule

}