import { inject, injectable } from "tsyringe";
import { BaseServiceImpl } from "@/modules/base/BaseServiceImpl";
import { CreateFilePicturesDTO, FilePicturesDTO, UpdateFilePicturesDTO } from "../../dtos/FilePictureDTO";
import { FilePicturesRepository } from "../../database/repositories/FilePicturesRepository";

injectable()
export class FilePicturesServiceImpl 
    extends BaseServiceImpl<FilePicturesDTO, CreateFilePicturesDTO, UpdateFilePicturesDTO> {

    constructor(
        @inject("FilePicturesRepository")
        filePictures: FilePicturesRepository
    ) {
        super(filePictures)
    }
}