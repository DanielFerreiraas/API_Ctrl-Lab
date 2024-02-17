import { Request, Response } from 'express';

export interface LabController{
    newLab(req: Request, res: Response): Promise<Response>;
}