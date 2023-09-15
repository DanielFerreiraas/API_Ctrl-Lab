import { ExampleOne } from "../entities/exampleOne.entity";

import { ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO } from "../../../dtos/exampleOneDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class ExampleOneRepositoryImpl 
    extends BaseRepositoryImpl<ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO> {
        
        constructor() {
            super("id", ExampleOne)
        }

}