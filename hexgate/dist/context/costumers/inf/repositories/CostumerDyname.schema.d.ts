import { Item } from 'dynamoose/dist/Item';
export declare class CostumerSchemaType extends Item {
    uuid: string;
    name: string;
    email: string;
    phone: string;
    password: string;
}
export declare const CostumerSchema: import("dynamoose/dist/Schema").Schema;
export declare const CostumerModel: import("dynamoose/dist/General").ModelType<CostumerSchemaType>;
