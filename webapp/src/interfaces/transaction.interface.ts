import { DeliveryDTO } from "./delivery.interface";

export interface transaction
{
    total: number
    productsList: {id:string, amount:number}[];
    userId:string;
    status: string;
    deliveryParams:DeliveryDTO
    transactionID:string;
}