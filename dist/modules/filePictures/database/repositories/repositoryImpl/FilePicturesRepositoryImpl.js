"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePicturesRepositoryImpl = void 0;
const BaseRepositoryImpl_1 = require("@/modules/base/BaseRepositoryImpl");
const FilePictures_entity_1 = require("../entities/FilePictures.entity");
class FilePicturesRepositoryImpl extends BaseRepositoryImpl_1.BaseRepositoryImpl {
    constructor() {
        super("id", FilePictures_entity_1.FilePictures);
    }
}
exports.FilePicturesRepositoryImpl = FilePicturesRepositoryImpl;
