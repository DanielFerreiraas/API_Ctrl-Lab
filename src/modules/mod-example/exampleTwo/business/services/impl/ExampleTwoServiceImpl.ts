import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO } from "../../../dtos/exampleTwoDTO";

import { ExampleTwoRepository } from "../../../database/repositories/exampleTwoRepository";

@injectable()
export class ExampleTwoServiceImpl extends BaseServiceImpl<ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO> {

    constructor(
        @inject("ExampleTwoRepository")
        exampleTwoRepository: ExampleTwoRepository
    ) {
        super(exampleTwoRepository)
    }
}