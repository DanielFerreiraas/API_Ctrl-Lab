export class PicturesDTO {
    id: string;
    src: string;
};

export type CreatePicturesDTO = Omit<PicturesDTO, 'id'>;
export type UpdatePicturesDTO = Partial<PicturesDTO>;