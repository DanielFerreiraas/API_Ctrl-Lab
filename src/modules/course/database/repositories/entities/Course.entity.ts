import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";


@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    idClass: string;

    @Column()
    period: string;


    

}