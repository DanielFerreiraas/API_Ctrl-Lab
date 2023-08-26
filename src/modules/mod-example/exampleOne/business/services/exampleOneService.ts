import { BaseService } from "@/modules/base/BaseService";

import { ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO } from "../../dtos/exampleOneDTO";

export interface ExampleOneService 
    extends BaseService<ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO> {}