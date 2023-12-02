import { container } from 'tsyringe';

import { LaboratoryControllerImpl } from '../../../modules/laboratory/api/controllers/controllerImpl/LaboratoryControllerImpl';
import { CourseControllerImpl } from '../../../modules/course/api/controllers/controllerImpl/CourseControllerImpl';
import { scheduleControllerImpl } from '../../../modules/schedule/api/controllers/controllerImpl/scheduleControllerImpl';
import { AuthControllerImpl } from '../../../modules/auth/auth/api/controllers/impl/authControllerImpl';
import { UserControllerImpl } from '../../../modules/auth/user/api/controllers/impl/userControllerImpl';
import { LabControllerImpl } from '../../../modules/lab/api/controllers/Impl/LabControllerImpl';

import { LaboratoryServiceImpl } from '../../../modules/laboratory/business/services/serviceImpl/LaboratoryServiceImpl';
import { CourseServiceImpl } from '../../../modules/course/business/services/serviceImpl/CourseServiceImpl';
import { scheduleServiceImpl } from '../../../modules/schedule/business/services/serviceImpl/scheduleServiceImpl';
import { AuthServiceImpl } from '../../../modules/auth/auth/business/services/impl/authServiceImpl';
import { UserServiceImpl } from '../../../modules/auth/user/business/services/impl/UserServiceImpl';
import { LabServiceImpl } from '../../../modules/lab/business/services/Impl/LabServiceImpl';

import { LaboratoryRepositoryImpl } from '../../../modules/laboratory/database/repositories/repositoryImpl/LaboratoryRepositoryImpl';
import { CourseRepositoryImpl } from '../../../modules/course/database/repositories/repositorylmpl/CourseRepositorylmpl';
import { scheduleRepositoryImpl } from '../../../modules/schedule/database/repositories/repositoryImpl/scheduleRepositoryImpl';
import { UserRepositoryImpl } from '../../../modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl';


container.register("LaboratoryController", {useClass: LaboratoryControllerImpl});
container.register("CourseController", {useClass: CourseControllerImpl});
container.register("scheduleController", {useClass: scheduleControllerImpl});
container.register("AuthController", {useClass: AuthControllerImpl});
container.register("UserController", {useClass: UserControllerImpl});
container.register("LabController", {useClass: LabControllerImpl});

container.register("LaboratoryService", {useClass: LaboratoryServiceImpl});
container.register("CourseService", {useClass: CourseServiceImpl});
container.register("scheduleService", {useClass: scheduleServiceImpl});
container.register("AuthService", {useClass: AuthServiceImpl});
container.register("UserService", {useClass: UserServiceImpl});
container.register("LabService", {useClass: LabServiceImpl});

container.register("LaboratoryRepository", {useClass: LaboratoryRepositoryImpl});
container.register("CourseRepository", {useClass: CourseRepositoryImpl});
container.register("scheduleRepository", {useClass: scheduleRepositoryImpl});
container.register("UserRepository", {useClass: UserRepositoryImpl});