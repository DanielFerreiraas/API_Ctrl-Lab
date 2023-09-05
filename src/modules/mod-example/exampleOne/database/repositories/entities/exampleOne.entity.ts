import { ExampleTwo } from "@/modules/mod-example/exampleTwo/database/repositories/entities/exampleTwo.entity";

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";


@Entity()
export class ExampleOne {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fieldOne: string;

    @Column()
    fieldTwo: string;

    @OneToMany(() => ExampleTwo, exampleTwo => exampleTwo.exampleOne, {eager: true})
    exampleTwoId: ExampleTwo[]
}