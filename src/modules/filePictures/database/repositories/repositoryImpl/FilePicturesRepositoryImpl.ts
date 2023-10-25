import { BaseRepositoryImpl } from "@/modules/base/BaseRepositoryImpl";
import { CreateFilePicturesDTO, UpdateFilePicturesDTO, FilePicturesDTO } from "@/modules/filePictures/dtos/FilePictureDTO"
import { FilePictures } from "../entities/FilePictures.entity";

export class FilePicturesRepositoryImpl 
    extends BaseRepositoryImpl<FilePicturesDTO, CreateFilePicturesDTO, UpdateFilePicturesDTO> {
        
        constructor(){
           super("id", FilePictures)
        }
}