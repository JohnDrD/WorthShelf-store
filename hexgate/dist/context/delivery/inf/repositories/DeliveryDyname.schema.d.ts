import { Item } from 'dynamoose/dist/Item';
export declare class DeliverySchemaType extends Item {
    uuid: string;
    postCode: string;
    country: string;
    city: string;
    address: string;
    status: string;
    dateCreated?: number;
    dateSend?: number;
    dateFinish?: number;
    transactionId: string;
}
export declare const DeliverySchema: import("dynamoose/dist/Schema").Schema;
export declare const DeliveryModel: import("dynamoose/dist/General").ModelType<DeliverySchemaType>;
