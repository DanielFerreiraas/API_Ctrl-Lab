import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "../../../../../modules/base/BaseServiceImpl";

import { scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO } from "../../../dtos/scheduleDTO";

import { scheduleRepository } from "../../../database/repositories/scheduleRepository";


@injectable()
export class scheduleServiceImpl 
    extends BaseServiceImpl<scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO> {

        constructor(
            @inject("scheduleRepository")
            scheduleRepository: scheduleRepository
          ) {
            super(scheduleRepository);
          }

}