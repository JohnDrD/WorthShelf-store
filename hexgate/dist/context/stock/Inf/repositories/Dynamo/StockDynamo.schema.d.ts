import { Item } from 'dynamoose/dist/Item';
export declare class StockSchemaType extends Item {
    uuid: string;
    name: string;
    desciption: string;
    unitValue: number;
    stock: number;
    images: string[];
    description: string;
    dateCreated: number;
}
export declare const StockSchema: import("dynamoose/dist/Schema").Schema;
export declare const StockModel: import("dynamoose/dist/General").ModelType<StockSchemaType>;
