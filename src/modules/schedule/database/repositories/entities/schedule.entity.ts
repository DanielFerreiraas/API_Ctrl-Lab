import { User } from "../../../../../modules/auth/user/database/repositories/impl/typeorm/entities/user.entity";
import { Course } from "../../../../../modules/course/database/repositories/entities/Course.entity";
import { Laboratory } from "../../../../../modules/laboratory/database/repositories/entities/Laboratory.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: string;

    @Column()
    start: string;

    @Column()
    end: string;

    @ManyToOne(() => Laboratory, (laboratory) => laboratory.schedules, {eager: true})
    @JoinColumn({name : "laboratory_id"})
    laboratoryId: Laboratory

    @ManyToOne(() => Course, (course) => course.schedules, {eager: true})
    @JoinColumn({name : "course_id"})
    courseId: Laboratory

    @ManyToOne(() => User, (user) => user.schedules, {eager: true})
    @JoinColumn({name: "user_id"})
    userId: User

}