import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerimpl";

import { scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO } from "../../../dtos/scheduleDTO";

import { scheduleService } from "../../../business/services/scheduleService";

@injectable()
export class scheduleControllerImpl extends BaseControllerImpl<scheduleDTO, CreatescheduleDTO, UpdatescheduleDTO> {
  constructor(
    @inject("scheduleService")
    scheduleService: scheduleService
  ) {
    super(scheduleService);
  }
}