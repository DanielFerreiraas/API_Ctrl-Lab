import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pictures {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: true})
    src: string;

}