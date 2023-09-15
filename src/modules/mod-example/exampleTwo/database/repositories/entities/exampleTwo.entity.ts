import { ExampleOne } from "@/modules/mod-example/exampleOne/database/repositories/entities/exampleOne.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class ExampleTwo {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @ManyToOne(() => ExampleOne, exampleOne => exampleOne.exampleTwoId)
    @JoinColumn({name: "exampleOne_id"})
    exampleOne: ExampleOne;
}