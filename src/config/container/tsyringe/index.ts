import { container } from 'tsyringe';

import { ExampleOneControllerImpl } from '@/modules/mod-example/exampleOne/api/controllers/controllerImpl/exampleOneControllerImpl';
import { ExampleTwoControllerImpl } from '@/modules/mod-example/exampleTwo/api/controllers/impl/ExampleTwoControllerImpl'; 
import { LaboratoryControllerImpl } from '@/modules/laboratory/api/controllers/controllerImpl/LaboratoryControllerImpl';
import { CourseControllerImpl } from '@/modules/course/api/controllers/controllerImpl/CourseControllerImpl';

import { ExampleOneServiceImpl } from '@/modules/mod-example/exampleOne/business/services/serviceImpl/exampleOneServiceImpl';
import { ExampleTwoServiceImpl } from '@/modules/mod-example/exampleTwo/business/services/impl/ExampleTwoServiceImpl';
import { LaboratoryServiceImpl } from '@/modules/laboratory/business/services/serviceImpl/LaboratoryServiceImpl';
import { CourseServiceImpl } from '@/modules/course/business/services/serviceImpl/CourseServiceImpl';

import { ExampleOneRepositoryImpl } from '@/modules/mod-example/exampleOne/database/repositories/repositoryImpl/exampleOneRepositoryImpl';
import { ExampleTwoRepositoryImpl } from '@/modules/mod-example/exampleTwo/database/repositories/repositoryImpl/exampleTwoRepositoryImpl';
import { LaboratoryRepositoryImpl } from '@/modules/laboratory/database/repositories/repositoryImpl/LaboratoryRepositoryImpl';
import { CourseRepositoryImpl } from '@/modules/course/database/repositories/repositorylmpl/CourseRepositorylmpl';



container.register("ExampleOneController", {useClass: ExampleOneControllerImpl});
container.register("ExampleTwoController", {useClass: ExampleTwoControllerImpl});
container.register("LaboratoryController", {useClass: LaboratoryControllerImpl});
container.register("CourseController", {useClass: CourseControllerImpl});

container.register("ExampleOneService", {useClass: ExampleOneServiceImpl});
container.register("ExampleTwoService", {useClass: ExampleTwoServiceImpl});
container.register("LaboratoryService", {useClass: LaboratoryServiceImpl});
container.register("CourseService", {useClass: CourseServiceImpl});

container.register("ExampleOneRepository", {useClass: ExampleOneRepositoryImpl});
container.register("ExampleTwoRepository", {useClass: ExampleTwoRepositoryImpl});
container.register("LaboratoryRepository", {useClass: LaboratoryRepositoryImpl});
container.register("CourseRepository", {useClass: CourseRepositoryImpl});