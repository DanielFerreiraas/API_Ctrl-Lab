import { ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO } from "../../dtos/exampleTwoDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface ExampleTwoRepository 
    extends BaseRepository<ExampleTwoDTO, CreateExampleTwoDTO, UpdateExampleTwoDTO> {}