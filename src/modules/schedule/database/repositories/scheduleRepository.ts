import { scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO } from "../../dtos/scheduleDTO";

import { BaseRepository } from "@/modules/base/BaseRepository";

export interface scheduleRepository 
    extends BaseRepository<scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO>{}