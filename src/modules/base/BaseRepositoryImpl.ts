import { Repository, EntityTarget, FindOptionsWhere, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { BaseRepository } from './BaseRepository';

import dataSource from '../../config/database/typeorm/data-source';

export class BaseRepositoryImpl<T, U, V> implements BaseRepository<T, U, V> {
    private primaryKey: keyof T;
    protected typeormRepository: Repository<T>;

    constructor(primaryKey: keyof T, entityType: EntityTarget<T>) {
        this.primaryKey = primaryKey;
        this.typeormRepository = dataSource.getRepository(entityType);
    }

    async countItems(): Promise<number> {
        return await this.typeormRepository.count();
    }

    async getItems(): Promise<T[]> {
        return await this.typeormRepository.find();
    }

    async getItemById(id: string): Promise<T> {
        const item =  await this.typeormRepository.findOne({ 
            where: { [this.primaryKey]: id } as FindOptionsWhere<T> 
        });

        if (!item) {
            throw new Error(`Register not found!`);
        }
        
        return item;
    }

    async getItemByField(field: string, value: string): Promise<T[]> {
        return await this.typeormRepository.find({
            where: { [field]: value } as FindOptionsWhere<T>
        });
    };

    async createItem(item: U): Promise<T> {
        const newItem = this.typeormRepository.create(item as DeepPartial<T>);

        return await this.typeormRepository.save(newItem);
    }

    async updateItem(id: string, item: V): Promise<T> {
        await this.typeormRepository.update(id, item as QueryDeepPartialEntity<T>);

        return await this.getItemById(id);
    }

    async deleteItem(id: string): Promise<void> {
        const item = await this.getItemById(id);

        await this.typeormRepository.delete(id);
    }
}