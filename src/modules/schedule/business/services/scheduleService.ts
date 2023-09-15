import { BaseService } from "@/modules/base/BaseService";

import { scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO } from "../../dtos/scheduleDTO";

export interface scheduleService 
    extends BaseService<scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO> {}