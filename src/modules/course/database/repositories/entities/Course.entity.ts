import { schedule } from "../../../../../modules/schedule/database/repositories/entities/schedule.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    idClass: string;

    @Column()
    period: number;
    
    @OneToMany(() => schedule, (schedule) => schedule.courseId)
    schedules: schedule

}