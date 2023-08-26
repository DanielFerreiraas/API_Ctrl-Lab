import { Request, Response } from 'express';

export interface BaseController {
    getItems(req: Request, res: Response): Promise<Response>;
    getItemById(req: Request, res: Response): Promise<Response>;
    getItemByField(req: Request, res: Response): Promise<Response>;
    createItem(req: Request, res: Response): Promise<Response>;
    updateItem(req: Request, res: Response): Promise<Response>;
    deleteItem(req: Request, res: Response): Promise<Response>;
}