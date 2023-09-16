import { CourseDTO, CreatecourseDTO, UpdatecourseDTO } from "../../dtos/CourseDTO";
import { BaseRepository } from "@/modules/base/BaseRepository";

export interface CourseRepository
    extends BaseRepository<CourseDTO, CreatecourseDTO, UpdatecourseDTO>{}