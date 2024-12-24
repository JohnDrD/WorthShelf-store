import { Item } from 'dynamoose/dist/Item';
export declare class TransactionSchemaType extends Item {
    uuid: string;
    total: number;
    dateCreated: number;
    dateChanged: number;
    productsList: {
        id: string;
        amount: number;
    }[];
    userId: string;
    deliveryId?: string;
    status: string;
    transactionID: string;
}
export declare const TransactionSchema: import("dynamoose/dist/Schema").Schema;
export declare const TransactionModel: import("dynamoose/dist/General").ModelType<TransactionSchemaType>;
