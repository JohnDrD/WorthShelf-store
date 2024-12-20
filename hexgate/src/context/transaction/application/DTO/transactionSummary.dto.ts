import { CostumerDTO } from "../../domain/Internal/costumer/constumerDTO.interface";
import { DeliveryDTO } from "../../domain/Internal/delivery/deliveryDTO.interface";

export interface TransactionSummary{
    uuid:string;
    total: number
    dateCreated: number;
    dateChanged:number;
    productsList: {id:string, amount:number}[];
    status:string
    
    userInfo?:CostumerDTO;
    deliveryInfo?:DeliveryDTO;
}