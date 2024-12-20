import { DeliveryDTO } from "../../domain/Internal/delivery/deliveryDTO.interface";

export interface TransactionStatusDTO{
    id:string;
    status: string;
    deliveryParams?:DeliveryDTO
}