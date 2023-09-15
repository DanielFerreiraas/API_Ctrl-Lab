import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    laboratory_id: string;

    @Column()
    user_id: string;

    @Column()
    course_id: string;

    @Column()
    date: string;

    @Column()
    start: string;

    @Column()
    end: string;
}