import { container } from 'tsyringe';

import { ExampleOneControllerImpl } from '@/modules/mod-example/exampleOne/api/controllers/controllerImpl/exampleOneControllerImpl';
import { ExampleTwoControllerImpl } from '@/modules/mod-example/exampleTwo/api/controllers/impl/ExampleTwoControllerImpl'; 

import { ExampleOneServiceImpl } from '@/modules/mod-example/exampleOne/business/services/serviceImpl/exampleOneServiceImpl';
import { ExampleTwoServiceImpl } from '@/modules/mod-example/exampleTwo/business/services/impl/ExampleTwoServiceImpl';

import { ExampleOneRepositoryImpl } from '@/modules/mod-example/exampleOne/database/repositories/repositoryImpl/exampleOneRepositoryImpl';
import { ExampleTwoRepositoryImpl } from '@/modules/mod-example/exampleTwo/database/repositories/repositoryImpl/exampleTwoRepositoryImpl';

container.register("ExampleOneController", {useClass: ExampleOneControllerImpl});
container.register("ExampleTwoController", {useClass: ExampleTwoControllerImpl});

container.register("ExampleOneService", {useClass: ExampleOneServiceImpl});
container.register("ExampleTwoService", {useClass: ExampleTwoServiceImpl});

container.register("ExampleOneRepository", {useClass: ExampleOneRepositoryImpl});
container.register("ExampleTwoRepository", {useClass: ExampleTwoRepositoryImpl});