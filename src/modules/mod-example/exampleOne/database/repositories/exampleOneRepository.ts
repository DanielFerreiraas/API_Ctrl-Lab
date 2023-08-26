import { ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO } from "../../dtos/exampleOneDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface ExampleOneRepository 
    extends BaseRepository<ExampleOneDTO, CreateExampleOneDTO, UpdateExampleOneDTO>{}