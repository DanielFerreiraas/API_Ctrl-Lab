import { Course } from "../entities/Course.entity";

import { CourseDTO, CreatecourseDTO, UpdatecourseDTO } from "../../../dtos/CourseDTO";

import { BaseRepositoryImpl } from "../../../../../modules/base/BaseRepositoryImpl";

export class CourseRepositoryImpl 
    extends BaseRepositoryImpl<CourseDTO, CreatecourseDTO, UpdatecourseDTO> {
        
        constructor() {
            super("id", Course)
        }

}