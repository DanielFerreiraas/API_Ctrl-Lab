export class signupDTO {
    numberRegister: string;
    idPictures: number;
    password: string;
    username: string;
    type: string;
    name: string;
    photoLink: string;
    description: string;
}

export class authDTO {
    numberRegister: string;
    password: string;
}

export class tokenDTO {
    token: string;
}