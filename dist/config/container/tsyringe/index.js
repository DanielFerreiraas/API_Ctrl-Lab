"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const exampleOneControllerImpl_1 = require("@/modules/mod-example/exampleOne/api/controllers/controllerImpl/exampleOneControllerImpl");
const ExampleTwoControllerImpl_1 = require("@/modules/mod-example/exampleTwo/api/controllers/impl/ExampleTwoControllerImpl");
const LaboratoryControllerImpl_1 = require("@/modules/laboratory/api/controllers/controllerImpl/LaboratoryControllerImpl");
const exampleOneServiceImpl_1 = require("@/modules/mod-example/exampleOne/business/services/serviceImpl/exampleOneServiceImpl");
const ExampleTwoServiceImpl_1 = require("@/modules/mod-example/exampleTwo/business/services/impl/ExampleTwoServiceImpl");
const LaboratoryServiceImpl_1 = require("@/modules/laboratory/business/services/serviceImpl/LaboratoryServiceImpl");
const exampleOneRepositoryImpl_1 = require("@/modules/mod-example/exampleOne/database/repositories/repositoryImpl/exampleOneRepositoryImpl");
const exampleTwoRepositoryImpl_1 = require("@/modules/mod-example/exampleTwo/database/repositories/repositoryImpl/exampleTwoRepositoryImpl");
const LaboratoryRepositoryImpl_1 = require("@/modules/laboratory/database/repositories/repositoryImpl/LaboratoryRepositoryImpl");
tsyringe_1.container.register("ExampleOneController", { useClass: exampleOneControllerImpl_1.ExampleOneControllerImpl });
tsyringe_1.container.register("ExampleTwoController", { useClass: ExampleTwoControllerImpl_1.ExampleTwoControllerImpl });
tsyringe_1.container.register("LaboratoryController", { useClass: LaboratoryControllerImpl_1.LaboratoryControllerImpl });
tsyringe_1.container.register("ExampleOneService", { useClass: exampleOneServiceImpl_1.ExampleOneServiceImpl });
tsyringe_1.container.register("ExampleTwoService", { useClass: ExampleTwoServiceImpl_1.ExampleTwoServiceImpl });
tsyringe_1.container.register("LaboratoryService", { useClass: LaboratoryServiceImpl_1.LaboratoryServiceImpl });
tsyringe_1.container.register("ExampleOneRepository", { useClass: exampleOneRepositoryImpl_1.ExampleOneRepositoryImpl });
tsyringe_1.container.register("ExampleTwoRepository", { useClass: exampleTwoRepositoryImpl_1.ExampleTwoRepositoryImpl });
tsyringe_1.container.register("LaboratoryRepository", { useClass: LaboratoryRepositoryImpl_1.LaboratoryRepositoryImpl });
