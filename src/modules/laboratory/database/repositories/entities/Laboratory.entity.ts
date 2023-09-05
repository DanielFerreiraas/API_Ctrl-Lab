import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

}