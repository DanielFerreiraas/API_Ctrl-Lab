export interface BaseRepository<T, U, V> {
    countItems(): Promise<number>,
    getItems(): Promise<T[]>;
    getItemById(id: string): Promise<T>;
    getItemByField(field: string, value: string): Promise<T>;
    createItem(item: U): Promise<T>;
    updateItem(id: string, item: V): Promise<T>;
    deleteItem(id: string): Promise<void>;
}