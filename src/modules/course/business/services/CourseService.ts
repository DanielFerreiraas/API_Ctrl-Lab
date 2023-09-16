import { BaseService } from "@/modules/base/BaseService";

import { CourseDTO, CreatecourseDTO, UpdatecourseDTO } from "../../dtos/CourseDTO";

export interface CourseService 
    extends BaseService<CourseDTO, CreatecourseDTO, UpdatecourseDTO> {}