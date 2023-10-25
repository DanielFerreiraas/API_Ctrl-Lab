import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class FilePictures {
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    source: string
}