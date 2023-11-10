import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "../../../../../modules/base/BaseControllerimpl";

import { CourseDTO, CreatecourseDTO, UpdatecourseDTO } from "../../../../../modules/course/dtos/CourseDTO";

import { CourseService } from "../../../../../modules/course/business/services/CourseService";

@injectable()
export class CourseControllerImpl extends BaseControllerImpl<CourseDTO, CreatecourseDTO, UpdatecourseDTO> {
    constructor(
        @inject("CourseService")
        courseService: CourseService
    ) {
            super(courseService);
        }
    
}