import { ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO } from "../../dtos/exampleTwoDTO";

import { BaseService } from "@/modules/base/BaseService";

export interface ExampleTwoService extends BaseService<ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO> {}