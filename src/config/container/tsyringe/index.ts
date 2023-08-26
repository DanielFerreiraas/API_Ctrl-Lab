import { container } from 'tsyringe';

import { ExampleOneControllerImpl } from '@/modules/mod-example/exampleOne/api/controllers/controllerImpl/exampleOneControllerImpl';

import { ExampleOneServiceImpl } from '@/modules/mod-example/exampleOne/business/services/serviceImpl/exampleOneServiceImpl';

import { ExampleOneRepositoryImpl } from '@/modules/mod-example/exampleOne/database/repositories/repositoryImpl/exampleOneRepositoryImpl';

container.register("ExampleOneController", {useClass: ExampleOneControllerImpl});

container.register("ExampleOneService", {useClass: ExampleOneServiceImpl});

container.register("ExampleOneRepository", {useClass: ExampleOneRepositoryImpl});