import { schedule } from "../entities/schedule.entity";

import { scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO } from "../../../dtos/scheduleDTO";

import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";

export class scheduleRepositoryImpl 
    extends BaseRepositoryImpl<scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO> {
        
        constructor() {
            super("id", schedule)
        }

}