import { inject, injectable } from "tsyringe";

import { FilePicturesService } from "@/modules/filePictures/business/FilePicturesService";

import { BaseControllerImpl } from "@/modules/base/BaseControllerimpl";

import { CreateFilePicturesDTO, FilePicturesDTO, UpdateFilePicturesDTO } from "@/modules/filePictures/dtos/FilePictureDTO";

injectable()
export class FilePicturesControllerImpl 
    extends BaseControllerImpl<FilePicturesDTO, CreateFilePicturesDTO, UpdateFilePicturesDTO> {
        
        constructor(
            @inject("FilePicturesService")
            filePicturesService: FilePicturesService
        ) {
            super(filePicturesService)
        }
        
}