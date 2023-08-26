import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerimpl";

import { ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO } from "../../../dtos/exampleOneDTO";

import { ExampleOneService } from "../../../business/services/exampleOneService";

@injectable()
export class ExampleOneControllerImpl extends BaseControllerImpl<ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO> {
  constructor(
    @inject("ExampleOneService")
    exampleOneService: ExampleOneService
  ) {
    super(exampleOneService);
  }
}