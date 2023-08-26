import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';

import { BaseController } from './BaseController';
import { BaseService } from './BaseService';
import { stringify } from 'querystring';

@injectable()
export class BaseControllerImpl<T, U, V> implements BaseController {

    constructor(
        @inject("BaseService")
        private baseService: BaseService<T, U, V>
    ) {}
    
    public async getItems(req: Request, res: Response): Promise<Response> {
        const items = await this.baseService.getItems();
        return res.json(items);
    }

    public async getItemById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const item = await this.baseService.getItemById(String(id));
        return res.json(item);
    }

    public async getItemByField(req: Request, res: Response): Promise<Response> {
        const { field, value } = req.params;
        const item = await this.baseService.getItemByField(field, value);
        return res.json(item);
    }

    public async createItem(req: Request, res: Response): Promise<Response> {
        const item = await this.baseService.createItem(req.body as U);
        return res.json(item)
    }

    public async updateItem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const item = await this.baseService.updateItem(String(id), req.body);
        return res.json(item);
    }

    public async deleteItem(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        await this.baseService.deleteItem(String(id));
        return res.status(204).send();
    }
}