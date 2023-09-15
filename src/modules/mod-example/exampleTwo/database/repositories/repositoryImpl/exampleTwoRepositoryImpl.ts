import { CreateExampleTwoDTO, ExampleTwoDTO, UpdateExampleTwoDTO } from "../../../dtos/exampleTwoDTO";

import { ExampleTwo } from "../entities/exampleTwo.entity";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class ExampleTwoRepositoryImpl extends BaseRepositoryImpl<ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO> {

    constructor(){
        super("id", ExampleTwo)
    }
        
}