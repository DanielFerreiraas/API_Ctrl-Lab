import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class schedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    laboratoryId: string;

    @Column()
    userId: string;

    @Column()
    courseId: string;

    @Column()
    date: string;

    @Column()
    start: string;

    @Column()
    end: string;
}