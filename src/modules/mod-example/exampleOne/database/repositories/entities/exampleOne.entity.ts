import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ExampleOne {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fieldOne: string;

    @Column()
    fieldTwo: string;
}