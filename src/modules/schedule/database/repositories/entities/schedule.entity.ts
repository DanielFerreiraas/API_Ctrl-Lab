import { Course } from "@/modules/course/database/repositories/entities/Course.entity";
import { Laboratory } from "@/modules/laboratory/database/repositories/entities/Laboratory.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";


@Entity()
export class schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    date: string;

    @Column()
    start: string;

    @Column()
    end: string;

    @ManyToOne(() => Laboratory, (Laboratory) => Laboratory.schedules, {eager: true})
    @JoinColumn({name : "laboratory_id"})
    laboratoryId: Laboratory

    @ManyToOne(() => Course, (Course) => Course.schedules, {eager: true})
    @JoinColumn({name : "course_id"})
    courseId: Laboratory

}