export class FilePicturesDTO {
    id: string;
    source: string;
}

export type CreateFilePicturesDTO = Omit<FilePicturesDTO, "id">
export type UpdateFilePicturesDTO = Partial<FilePicturesDTO>