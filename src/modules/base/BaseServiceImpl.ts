import { injectable, inject } from "tsyringe";

import { BaseService } from './BaseService';
import { BaseRepository } from "./BaseRepository";

@injectable()
export class BaseServiceImpl<T, U, V> implements 
BaseService<T, U, V> {

    constructor(
        @inject('BaseRepository')
        private baseRepository: BaseRepository<T, U , V>
    ) {}

    async countItems(): Promise<number> {
        return this.baseRepository.countItems();
    }

    async getItems(): Promise<T[]> {
        return this.baseRepository.getItems();
    }

    async getItemById(id: string): Promise<T> {
        return this.baseRepository.getItemById(id);
    }

    async getItemByField(field: string, value: string): Promise<T> {
        return this.baseRepository.getItemByField(field, value);
    }

    async createItem(item: U): Promise<T> {
        return this.baseRepository.createItem(item);
    }

    async updateItem(id: string, item: V): Promise<T> {
        return this.baseRepository.updateItem(id, item);
    }

    async deleteItem(id: string): Promise<void> {
        return this.baseRepository.deleteItem(id);
    }
}