import { ClassDTO, CreateClassDTO, UpdateClassDTO } from "../../dtos/exampleOneDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface ClassRepository 
    extends BaseRepository<ClassDTO, CreateClassDTO, UpdateClassDTO>{}