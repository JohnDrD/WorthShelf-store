import { DeliveryDTO } from "../../domain/Internal/delivery/deliveryDTO.interface";


export interface TransactionCreateDTO{
    total: number
    productsList: {id:string, amount:number}[];
    userId:string;
    status: string;
    deliveryParams:DeliveryDTO
    transactionID:string;
}
