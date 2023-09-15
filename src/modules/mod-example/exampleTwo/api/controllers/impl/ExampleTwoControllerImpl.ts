import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerimpl";

import { ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO } from "../../../dtos/exampleTwoDTO";

import { ExampleTwoService } from "../../../business/services/ExampleTwoService";

@injectable()
export class ExampleTwoControllerImpl extends BaseControllerImpl<ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO> {
  constructor(
    @inject("ExampleTwoService")
    exampleTwoService: ExampleTwoService
  ) {
    super(exampleTwoService);
  }
}