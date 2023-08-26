import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO } from "../../../dtos/exampleOneDTO";

import { ExampleOneRepository } from "../../../database/repositories/exampleOneRepository";


@injectable()
export class ExampleOneServiceImpl 
    extends BaseServiceImpl<ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO> {

        constructor(
            @inject("ExampleOneRepository")
            exampleoneRepository: ExampleOneRepository
          ) {
            super(exampleoneRepository);
          }

}