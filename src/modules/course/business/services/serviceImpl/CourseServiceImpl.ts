import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";

import { CourseDTO, CreatecourseDTO, UpdatecourseDTO } from "@/modules/course/dtos/CourseDTO";

import { CourseRepository } from "@/modules/course/database/repositories/CourseRepository";

@injectable()
export class CourseServiceImpl
    extends BaseServiceImpl<CourseDTO, 
    CreatecourseDTO, UpdatecourseDTO>{

        constructor(
            @inject("CourseRepository")
            courseRepository: CourseRepository
        ){
            super(courseRepository);
        }
    }